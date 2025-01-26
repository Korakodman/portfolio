import React from "react";

function Project() {
  return (
    <section className="project  p-2  bg-[#011627] mt-2 flex justify-center items-center">
      <div className="container-project grid grid-cols-3 gap-10 mt-5 mb-5">
        <div className="box-show-project ">
          <h1 className="text-head-project">Project</h1>
          <div>
            <a
              href="https://elaborate-begonia-f659e3.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="Screenshot_5.jpg" alt="" className="w-full h-[150px]" />
            </a>
          </div>
          <div className="flex justify-center items-center">
            <h2 className="text-project">Shopping Web Cart</h2>
          </div>
        </div>
        <div className="box-show-project">
          <h1 className="text-head-project">Project</h1>
          <div>
            <img src="Screenshot_5.jpg" alt="" className="w-full h-[150px]" />
          </div>
          <div className="flex items-center justify-center">
            <h2 className="text-project">To-Do-list</h2>
          </div>
        </div>
        <div className="box-show-project">
          <h1 className="text-head-project">Project</h1>
          <div>
            <img src="Screenshot_5.jpg" alt="" className="w-full h-[150px]" />
          </div>
          <div className="flex items-center justify-center">
            <h2 className="text-project">Clone Web</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
