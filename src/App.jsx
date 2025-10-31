import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import CurvedLoop from "./components/CurvedLoop/CurverLoop";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/footer/Footer";
import CircularGallery from "./components/CircularGalery/CircularGalery";
import AnimatedStars from "./components/ui/AnimatedBackground/AnimatedStars";

function App() {
  return (
    <div className="App">
      <div className="mainBackground">
        <AnimatedStars />
      </div>

      <div className="mainContent">
        <Header />
        <main>
          <Hero />
          {/* <CurvedLoop
            marqueeText="Web Developer ✦ App Developer ✦"
            speed={1.5}
            curveAmount={0}
            interactive={true}
            direction="right"
            className="curved-text-style-primary"
          /> */}

          <About />

          <div style={{ height: "400px", position: "relative" }}>
            <CircularGallery
              bend={-3}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollEase={0.02}
            />
          </div>
          {/* <CurvedLoop
            marqueeText="Frontend Enthusiast ✦ UI/UX Focus ✦"
            speed={1.5}
            curveAmount={0}
            interactive={true}
            direction="left"
            className="curved-text-style-secondary"
          /> */}
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
