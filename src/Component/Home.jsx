import React, { useEffect, useState } from "react";
import { forwardRef } from "react";
import TypeWriter from "./TypeWriter";
const Home = forwardRef((props, homeRef) => {
  return (
    <div className="about" ref={homeRef}>
      <section className="about-me bg-[#222831]   grid grid-cols-1 md:grid-cols-2 gap-4 md:h-[680px] p-4 md:p-0">
        <div className="about-me-text flex flex-col justify-center items-center text-center  md:text-left md:ml-16 space-y-4  p-4">
          <div className=" relative">
            {/* <h5
              className="before:absolute before:inset-0 before:animate-typewriter before:bg-[#011627]
after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-white text-white text-sm md:text-6xl p-2 
 w-[max-content] text-wrap rounded-sm bg-[#011627] overflow-hidden whitespace-nowrap"
            ></h5> */}
            <TypeWriter />
          </div>
          <div className="text-center md:text-left ">
            <p className="text-xl md:text-3xl p-2   md:w-3/4">
             Hi, I’m Korakod 👋
             Junior Frontend Developer
            </p>
            <p
              className="text-xl md:text-3xl p-2   w-[500px]  md:w-3/4
             "
            >
            I build responsive web applications using React, Next.js, and Tailwind CSS.
            </p>
          </div>
        </div>
        <div className="image flex justify-center items-center p-4">
          <img
            src="https://imgcdn.stablediffusionweb.com/2024/12/31/3bcc3d08-6edb-4182-8fa0-8a3fde401455.jpg"
            alt="image"
            className=" w-[250px] h-[250px] md:w-[400px] md:h-[400px]  object-cover rounded-full "
          />
        </div>
      </section>
      <hr className="border border-gray-600 w-full"></hr>
    </div>
  );
});
Home.displayName = "About";
export default Home;
