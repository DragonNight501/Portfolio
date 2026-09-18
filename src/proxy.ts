import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isLocale, localeCookie, locales } from "@/i18n/config";
import type { Locale } from "@/i18n/config";

/** Picks the best supported locale from an Accept-Language header. */
function negotiate(header: string | null): Locale {
  if (!header) return defaultLocale;

  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return { tag: tag.toLowerCase(), q: q ? Number(q.trim().slice(2)) : 1 };
    })
    .filter((entry) => entry.tag && !Number.isNaN(entry.q))
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ranked) {
    const primary = tag.split("-")[0];
    if (isLocale(primary)) return primary;
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (hasLocale) return;

  // An explicit choice from the switcher wins over the browser language.
  const saved = request.cookies.get(localeCookie)?.value;
  const locale =
    saved && isLocale(saved) ? saved : negotiate(request.headers.get("accept-language"));

  request.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  const response = NextResponse.redirect(request.nextUrl);
  response.headers.set("Vary", "Accept-Language, Cookie");
  return response;
}

export const config = {
  // Skip API routes, Next internals and any path with a file extension
  // (favicon.ico, robots.txt, sitemap.xml, images).
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
