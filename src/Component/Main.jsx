import React from "react";
import About from "./About";
function Main() {
  return (
    <main className="border-black border-2 h-full w-full p-1 ">
      <About />
      <section className="skill border-black border-2 p-2  bg-gray-200 mt-2">
        <div className="skill-text p-2 grid justify-center items-center ">
          <h2 className="text-5xl p-2 text-center">Skill</h2>

          <div className="skill-name-list-logo flex justify-between p-2 bg-gray-300 ">
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
            <img
              src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg"
              alt="tailwindcss"
              className="logo"
            />
          </div>
        </div>
        <section className="tool p-2">
          <div className="Head-Tool">
            <h1 className="text-5xl p-2 text-center">Tool</h1>
            <div className="Tool-name-list-logo flex justify-between p-2 bg-gray-300 ">
              <img src="vscode" alt="tailwindcss" className="logo" />
              <img
                src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg"
                alt="tailwindcss"
                className="logo"
              />
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Main;
