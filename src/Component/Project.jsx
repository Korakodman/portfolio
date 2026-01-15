import React from "react";
import { forwardRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Card from "./Card";
const Project = forwardRef((ref, projectRef) => {
  Aos.init;

  return (
    <section
      className="project  p-4  bg-[#222831]  flex justify-around items-center flex-wrap"
      ref={projectRef}
    >
      <Card
        title="App Chat Basic"
        image="app-chat-image.png"
        link="https://app-chat-basic.vercel.app/enter-name"
        github="https://github.com/Korakodman/ShoppingWeb"
        techUse="Socket + Nextjs "
      />
      <Card
        title="To-Do-list"
        image="download.png"
        link="https://full-list-crud.vercel.app/"
        github="https://github.com/Korakodman/full-list-crud"
        techUse="Nextjs crud + mongodb"
      />
      <Card
        title="Admin Dashboard "
        image="admindash.png"
        link="https://admin-dashboard-apy7.vercel.app/"
        github="https://github.com/Korakodman/admin-dashboard"
        techUse="Nextjs + Tailwindcss + mongodb"
      />
    </section>
  );
});
Project.displayName = "Project";
export default Project;
