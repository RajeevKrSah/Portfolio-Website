import React from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Skills from "../components/Skills.jsx";
import Education from "../components/Education.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../helper/ScrollToTop.jsx";

const HomePage = () => {
  return (
    <div className="min-h-screen relative mx-auto px-6 md:px-12 lg:px-20 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default HomePage;
