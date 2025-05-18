import React, { useRef } from "react";
import Home from "./Home";
import Skill from "./Skill";
import Project from "./Project";
import About from "./About";
import Header from "./Header";
import Demofooter from "./Footer/MainFooters";
function Main() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <main className=" h-full w-full p-1  ">
      <Header
        homeRef={homeRef}
        aboutRef={aboutRef}
        skillsRef={skillRef}
        projectsRef={projectRef}
        contactRef={contactRef}
      />

      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Skill ref={skillRef} />
      <Project ref={projectRef} />
      <Demofooter ref={contactRef} />
    </main>
  );
}

export default Main;
