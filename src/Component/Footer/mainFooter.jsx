import React from "react";
import { forwardRef } from "react";

const MainFooter = forwardRef((ref, contactRef) => {
  return (
    <footer
      ref={contactRef}
      className="bg-[#011627]  mx-1 h-[125px] p-2 mt-1  justify-center items-center"
    >
      <section className="footer grid grid-cols-3 gap-4 text-center">
        <div className="border-2 border-[#e71d36] p-2 h-[100px] md:h-[111px] ">
          <div className="mb-2">
            <h1 className="text-md md:text-2xl">My Github</h1>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="github-mark-white.png"
              alt="github"
              className="logo "
              style={{ width: "50px", height: "50px" }}
            ></img>
          </div>
        </div>
        <div className="p-2 md:p-4  border-[#e71d36] border-2 h-[100px] md:h-[111px]">
          <div className="mb-2">
            <h1 className="text-sm md:text-2xl">Gmail</h1>
          </div>
          <div>
            <h1 className="text-[8.5px] md:text-2xl">Korakodmice@gmail</h1>
            <p>
              <a
                href="mailto:someone@example.com"
                className="text-[10px] md:text-2xl"
              >
                Send email
              </a>
            </p>
          </div>
        </div>
        <div className=" p-2 border-[#e71d36] border-2 h-[100px] md:h-[111px]">
          <h1 className="text-sm md:text-2xl mb-2 text-wrap">My CV Resume</h1>

          <button className=" bg-gray-400 md:p-2 text-sm md:text-2xl p-1">
            Resume
          </button>
        </div>
      </section>
    </footer>
  );
});
MainFooter.displayName = "MainFooter";
export default MainFooter;
