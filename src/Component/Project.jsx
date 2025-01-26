import React from "react";

function Project() {
  const projects = [
    {
      title: "Shopping Web Cart",
      image: "Screenshot_5.jpg",
      link: "https://elaborate-begonia-f659e3.netlify.app/",
    },
    {
      title: "To-Do-list",
      image: "Screenshot_5.jpg",
      link: "#",
    },
    {
      title: "Clone Web",
      image: "Screenshot_5.jpg",
      link: "#",
    },
  ];

  return (
    <section
      className="project 
      p-4 
      bg-[#011627] 
      mt-2 
      flex 
      justify-center 
      items-center"
    >
      <div
        className="container-project 
        grid 
        grid-cols-1 
        md:grid-cols-3 
        gap-6 
        md:gap-10 
        mt-5 
        mb-5 
        w-full 
        max-w-6xl"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="box-show-project 
              mx-2 
              md:mx-10 
              my-5 
              p-5 
              bg-black 
              rounded-md 
              shadow-lg 
              shadow-[#ff9f1c] 
              text-center 
              border-2 
              border-[#ff9f1c] 
              flex 
              flex-col 
              items-center"
          >
            <h1
              className="text-head-project 
              text-xl 
              md:text-2xl 
              font-bold 
              text-white 
              p-2 
              bg-black 
              mb-4 
              shadow-lg 
              border-2 
              border-[#2ec4b6]"
            >
              Project
            </h1>
            <div className="mb-4 w-full">
              <a href={project.link} target="_blank" rel="noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[150px] object-cover"
                />
              </a>
            </div>
            <div className="flex justify-center items-center">
              <h2
                className="text-project 
                text-base 
                md:text-lg 
                text-white 
                p-2 
                mt-4 
                w-fit 
                bg-black 
                shadow-lg 
                border-x-4 
                border-y-2 
                border-[#2ec4b6]"
              >
                {project.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Project;
