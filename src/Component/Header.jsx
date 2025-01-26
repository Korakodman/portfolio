import React from "react";

function Header() {
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  ></link>;
  return (
    <header className="App-Header p-4 border-4 shadow-sm shadow-[#ff9f1c]  border-[#ff9f1c] bg-[#011627]  flex justify-between sticky top-0 z-50">
      <div className="head-logo p-2">
        <h1 className=" text-2xl  text-white ml-7 cursor-pointer">Korakod.</h1>
      </div>
      <nav className="head-nav mr-10 sm:hidden md:block ">
        <ul className="flex text-xl ">
          <li className="mr-8 warp-to">Home</li>
          <li className="mr-8 warp-to">About</li>
          <li className="mr-8 warp-to">Skill</li>
          <li className="mr-8 warp-to">Project</li>
          <li className="mr-2 warp-to">Contact</li>
        </ul>
      </nav>
      <nav className="head-nav mr-10 sm:block md:hidden ">
        <ul className="flex text-xl ">
          <li className="mr-8 ">Home</li>
          <li className="mr-8 ">About</li>
          <li className="mr-8 ">Skill</li>
          <li className="mr-8 ">Project</li>
          <li className="mr-2 ">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
