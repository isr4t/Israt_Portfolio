import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Education from "./components/Education";

function App() {
  return (
    <div className="bg-neutral-900 text-white">
      <Navbar />
      <Hero />
      <Education/>
      <Projects />
      <About />
      <Contact />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
