import React from "react";
import { forwardRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const About = forwardRef((ref, aboutRef) => {
  AOS.init();
  return (
    <div className="about-me" ref={aboutRef}>
      <section className=" bg-[#011627]  border-black border-2 grid grid-cols-1 md:grid-cols-2 gap-4 md:h-[680px] p-4 md:p-0">
        <div className="about-me-text flex flex-col justify-center items-center md:items-start  md:text-left md:ml-16 space-y-4  p-4">
          <div
            data-aos="zoom-in"
            className="text-3xl md:text-6xl p-4  overflow-hidden w-fit text-wrap rounded-sm  bg-[#011627] border-[#e71d36] border-r-4 border-l-4 border-2"
          >
            <h2 className="text-white">About me</h2>
          </div>
          <div data-aos="fade-up" className="text-center md:text-left">
            <p className="text-xl md:text-3xl p-2  text-white w-full  md:w-3/4">
              You can call me Ice
            </p>
            <p
              className="text-xl md:text-1xl p-2  text-white  w-full  md:w-3/4
       "
            >
              I have working on part-time 7-11 in thailand and I want to create
              a website for learning programming skill and have fun with new
              technology. in future i want to be full-stack development and
              create pos for my restaurant
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="image flex justify-center items-center p-4"
        >
          <img
            src="travel.jpg"
            alt="image"
            className="rounded-full w-[250px] h-[250px] md:w-[400px] md:h-[400px]  object-cover"
          />
        </div>
      </section>
      <hr className="border border-gray-600 w-full"></hr>
    </div>
  );
});
About.displayName = "About";
export default About;
