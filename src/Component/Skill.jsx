import React from "react";

function Skill() {
  return (
    <div>
      <section className="skill    p-2  bg-[#011627] h-[500px] ">
        <div className="skill-text p-2 grid justify-center items-center mb-5 mt-12">
          <div>
            <h2 className="text-4xl p-2 text-center shadow-md shadow-[#e71d36] mb-5 bg-black border-2 border-[#e71d36] border-r-4 border-l-4 ">
              Skill
            </h2>
          </div>

          <div className="skill-name-list-logo flex justify-between p-3 bg-black rounded-lg border-4 border-[#2ec4b6]">
            <img
              src="https://cdn-icons-png.flaticon.com/512/143/143655.png"
              alt="html"
              className="logo"
            ></img>
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
              alt="css"
              className="logo"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
              alt="javascript"
              className="logo"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
              alt="react"
              className="logo"
            />
          </div>
        </div>

        <div className="Head-Tool skill-text p-2 grid justify-center items-center mb-5">
          <h1 className="text-4xl p-2 text-center  border-[#e71d36] shadow-[#e71d36] shadow-md mb-5 bg-black border-r-4 border-l-4 border-2">
            Tool
          </h1>
          <div className="Tool-name-list-logo flex justify-between p-3 bg-black rounded-lg border-4 border-[#2ec4b6] border-r-4 border-l-4">
            <img src="vscode.png" alt="vscode" className="logo " />
            <img src="github-mark-white.png" alt="vscode" className="logo" />
            <img
              src="https://cdn-icons-png.flaticon.com/512/12222/12222560.png"
              alt="vscode"
              className="logo"
            />
          </div>
        </div>
      </section>
      <hr className="border border-gray-600 w-full"></hr>
    </div>
  );
}

export default Skill;
