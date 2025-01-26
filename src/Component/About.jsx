import React from "react";

function About() {
  return (
    <div className="about ">
      <section className="about-me border-black border-2 p-2  grid grid-cols-2 gap-4 h-[680px] bg-[#011627]">
        <div className="about-me-text p-2   grid  justify-center items-center ml-16  ">
          <div>
            <h2 className="text-6xl p-4 -mb-20 overflow-hidden w-fit text-wrap rounded-sm bg-[#011627] border-[#e71d36] border-r-4 border-l-4 border-2">
              Hi!! I'm Frontend Developer.
            </h2>
          </div>
          <div className="p-2 w-fit -mt-20 ">
            <p className="text-3xl p-2 w-3/4 text-white ">
              My Name is Korakod.
            </p>
            <p className="text-3xl p-2 w-3/4 text-white flex-wrap">
              I'm Junior Frontend Developer i'm 20 years old i have learning by
              myself and I have interested in Frontend Developer.
            </p>
          </div>
        </div>
        <div className="image p-2 flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1736598734718-daa665cc511c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
            className="rounded-full w-[400px] h-[400px]"
          />
        </div>
      </section>
      <hr className="border border-gray-600 w-full"></hr>
    </div>
  );
}

export default About;
