import { useState } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import ContactModal from "./components/ContactModal.jsx";
import Experience from "./components/Experience.jsx";
import SectionDividerBottom from "./components/SectionDividerBottom.jsx";
import SectionDividerTop from "./components/SectionDividerTop.jsx";
import Education from "./components/Education.jsx";

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans bg-white text-neutral-900 antialiased">
      <Nav onOpenContact={() => setContactOpen(true)} />
      <main>
        <Hero onOpenContact={() => setContactOpen(true)} />
        <SectionDividerTop subtle />

        <About />
        <SectionDividerBottom subtle />

        <Skills />
        <SectionDividerTop subtle />

        <Experience />
        <SectionDividerBottom subtle />

        <Education />
        <SectionDividerTop subtle />

        <Projects />
        <SectionDividerBottom subtle />
      </main>
      <Footer />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
