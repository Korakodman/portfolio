import React from "react";
import { forwardRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Card from "./Card";
const Project = forwardRef((ref, projectRef) => {
  Aos.init;
  let projects = [
    {
      title: "Shopping Web Cart",
      image: "Screenshot_5.jpg",
      link: "https://elaborate-begonia-f659e3.netlify.app/",
    },
    {
      title: "To-Do-list",
      image: "todolist.png",
      link: "https://todotranning.netlify.app/",
    },
    {
      title: "Clone Web",
      image: "Screenshot_5.jpg",
      link: "#",
    },
  ];

  return (
    <section
      className="project  p-4  bg-[#011627]  mt-2  flex justify-around items-center flex-wrap"
      ref={projectRef}
    >
      <Card
        title="Shopping Web Cart"
        image="Screenshot_5.jpg"
        link="https://elaborate-begonia-f659e3.netlify.app/"
      />
      <Card
        title="To-Do-list"
        image="todolist.png"
        link="https://todotranning.netlify.app/"
      />
      <Card
        title="Shopping Web Cart"
        image="Screenshot_5.jpg"
        link="https://elaborate-begonia-f659e3.netlify.app/"
      />
    </section>
  );
});
Project.displayName = "Project";
export default Project;
