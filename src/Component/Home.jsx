import React from "react";

function About() {
  return (
    <div className="about">
      <section className="about-me bg-[#011627]  border-black border-2 grid grid-cols-1 md:grid-cols-2 gap-4 md:h-[680px] p-4 md:p-0">
        <div className="about-me-text flex flex-col justify-center items-center text-center  md:text-left md:ml-16 space-y-4  p-4">
          <div className="text-3xl md:text-6xl p-2 overflow-hidden w-fit text-wrap rounded-sm  bg-[#011627] border-[#e71d36] border-r-4 border-l-4 border-2">
            <h2 className="text-white">Hi! I'm Frontend Developer.</h2>
          </div>
          <div className="text-center md:text-left">
            <p className="text-xl md:text-3xl p-2  text-white w-full  md:w-3/4">
              My Name is Korakod.
            </p>
            <p
              className="text-xl md:text-3xl p-2  text-white  w-full  md:w-3/4
             "
            >
              I'm Junior Frontend Developer i'm 20 years old i have learning by
              myself and I have interested in Frontend Developer.
            </p>
          </div>
        </div>
        <div className="image flex justify-center items-center p-4">
          <img
            src="https://images.unsplash.com/photo-1736598734718-daa665cc511c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
            className="rounded-full w-[250px] h-[250px] md:w-[400px] md:h-[400px]  object-cover"
          />
        </div>
      </section>
      <hr className="border border-gray-600 w-full"></hr>
    </div>
  );
}

export default About;
