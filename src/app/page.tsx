import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Foundations from "@/components/sections/foundations";
import RequestJourney from "@/components/sections/request-journey";
import Projects from "@/components/sections/projects";
import Toolbox from "@/components/sections/toolbox";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen">
        <Hero />
        <About />
        <Foundations />
        <RequestJourney />
        <Projects />
        <Toolbox />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
