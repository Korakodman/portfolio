import React from "react";
import { forwardRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const About = forwardRef((ref, aboutRef) => {
  AOS.init();
  return (
    <div className="about-me" ref={aboutRef}>
      <section className=" bg-[#222831]   grid grid-cols-1 md:grid-cols-2 gap-4 md:h-[680px] p-4 md:p-0">
        <div className="about-me-text flex flex-col justify-center items-center md:items-start  md:text-left md:ml-24 space-y-4  p-4">
          <div
            data-aos="zoom-in"
            className="text-3xl md:text-6xl p-4  overflow-hidden w-fit text-wrap rounded-sm  bg-[#393E46] border-[#393E46] border-r-4 border-l-4 border-2"
          >
            <h2 className="">About me</h2>
          </div>
          <div data-aos="fade-up" className="text-center md:text-left">
            <p className="text-xl md:text-3xl p-2   w-full  md:w-3/4">
              You can call me Ice
            </p>
            <p
              className="text-xl md:text-4xl p-2   w-full  md:w-4/5
       "
            >
           I’m a self-taught developer currently working part-time while improving my skills.

I enjoy building web applications and learning new technologies.
My goal is to become a full-stack developer in the future.

            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="image flex justify-center items-center p-4"
        >
          <div className=" bg-[#393E46] md:w-[425px] md:h-[425px]  w-[300px] h-[300px] p-2  rounded-[97%_3%_39%_61%/51%_37%_63%_49%]"></div>
          <img
            src="travel.jpg"
            alt="image"
            className=" w-[250px] h-[250px] md:w-[400px] md:h-[400px]  object-cover  rounded-[97%_3%_39%_61%/51%_37%_63%_49%] absolute "
          />
        </div>
      </section>
      <hr className="border border-gray-600 w-full"></hr>
    </div>
  );
});
About.displayName = "About";
export default About;
