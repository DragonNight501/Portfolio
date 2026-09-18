import { notFound } from "next/navigation";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Foundations from "@/components/sections/foundations";
import RequestJourney from "@/components/sections/request-journey";
import Projects from "@/components/sections/projects";
import Toolbox from "@/components/sections/toolbox";
import Contact from "@/components/sections/contact";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return (
    <>
      <Navbar lang={lang} dict={dict.nav} />
      <main id="main" className="min-h-screen">
        <Hero dict={dict} />
        <About dict={dict.about} />
        <Foundations dict={dict.foundations} />
        <RequestJourney dict={dict.systems} />
        <Projects dict={dict.projects} />
        <Toolbox dict={dict.toolbox} />
        <Contact dict={dict.contact} />
      </main>
      <Footer dict={dict.footer} />
    </>
  );
}
