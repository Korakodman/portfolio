import React from "react";
import Aos from "aos";
export default function Card({ link, image, title }) {
  Aos.init;
  return (
    <div
      data-aos="zoom-in"
      data-aos-delay="150"
      className="container-project flex  w-max p-2 "
    >
      <div className="box-show-project    h-auto w-[350px] flex-row  text-center justify-center items-center">
        <h1 className="text-head-project text-xl md:text-2xl font-bold  text-white  p-2  bg-black  mb-4  shadow-lg  border-2  border-[#2ec4b6]">
          Project
        </h1>
        <div className="mb-4 mx-4 w-max  p-2 text-center ml-10 ">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="group relative block w-[250px] h-[150px]  rounded-lg overflow-hidden border border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-semibold">View</span>
            </div>
          </a>
        </div>

        <nav className="flex justify-center  hover:cursor-pointer ml-10">
          <ul className="flex text-xl">
            <li className="mr-8 warp-to">
              <button className="relative overflow-hidden border-2 border-[#2ec4b6] text-white px-6 py-3 group">
                <span className="absolute inset-0 bg-[#2ec4b6] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0"></span>
                <span className="relative z-10">{title}</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
