import React from "react";
import { forwardRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { SkillIcon } from "./IconSkill";
const Skill = forwardRef((ref, skillRef) => {
  Aos.init();
  return (
    <div>
      <section
        className="skill  flex-col   p-2  bg-[#222831] h-[700px] "
        ref={skillRef}
      >
        <div className="skill-text p-2  md:grid mb-5 mt-20 justify-center items-center ">
          <div
            data-aos="fade-down"
            data-aos-delay="150"
            className="  grid justify-center items-center "
          >
            <h2 className="text-4xl p-2 text-center hover:cursor-default md:w-[250px] border-[#393E46]  shadow-md mb-5 bg-[#393E46] border-r-4 border-l-4 border-2">
              Tech Stack
            </h2>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="skill-name-list-logo flex justify-evenly flex-wrap p-3 bg-[#948979]rounded-lg "
          >
            <SkillIcon
              src={"https://cdn-icons-png.flaticon.com/512/143/143655.png"}
              alt={"Html"}
              text={"HTML"}
            />
            <SkillIcon
              src={"https://cdn-icons-png.flaticon.com/512/732/732190.png"}
              alt={"css"}
              text={"CSS"}
            />
            <SkillIcon
              src={"https://cdn-icons-png.flaticon.com/512/5968/5968292.png"}
              alt={"javascript"}
              text={"JavaScript"}
            />
            <SkillIcon
              src={"https://cdn-icons-png.flaticon.com/512/1126/1126012.png"}
              alt={"HTML"}
              text={"React"}
            />
            <SkillIcon
              src={"tailwindcss.svg "}
              alt={"tailwind"}
              text={"TailwindCSS"}
            />
            <SkillIcon
              src={
                "https://cdn.brandfetch.io/id2alue-rx/w/800/h/800/theme/dark/idqNI71Hra.png?c=1dxbfHSJFAPEGdCLU4o5B"
              }
              alt={"nextjs"}
              text={"Nextjs"}
            />
            <SkillIcon
              src={
                "https://cdn.brandfetch.io/ideyyfT0Lp/theme/light/idxmboBE0D.svg?c=1dxbfHSJFAPEGdCLU4o5B"
              }
              alt={"Mongo"}
              text={"MongoDB"}
            />
          </div>
        </div>

        <div
          data-aos="fade-down"
          data-aos-delay="150"
          className="Head-Tool skill-text p-2 grid justify-center items-center mb-5 mt-10"
        >
          <h1 className="text-4xl p-2 md:w-auto text-center hover:cursor-default border-[#393E46]  bg-[#393E46]    mb-5 border-r-4 border-l-4 border-2">
            Tool
          </h1>

          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="Tool-name-list-logo flex justify-evenly p-3   "
          >
             <SkillIcon
              src={
                "vscode.png"
              }
              alt={"vscode"}
              text={"VSCode"}
            />
             <SkillIcon
              src={
                "github-mark-white.png"
              }
              alt={"github"}
              text={"Github"}
            /> <SkillIcon
              src={
                "https://cdn-icons-png.flaticon.com/512/12222/12222560.png"
              }
              alt={"chatgpt"}
              text={"ChatGPT"}
            />
        
            
          </div>
        </div>
      </section>
      <hr className="border border-gray-600 w-full"></hr>
    </div>
  );
});
Skill.displayName = "Skill";
export default Skill;
