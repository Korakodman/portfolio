import { useState } from "react";

import "./App.css";
import Header from "./Component/Header";
import Main from "./Component/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App  bg-[#011627] text-[#fdfffc]">
      <Header />
      <Main />
      <hr className="border border-gray-600 w-full"></hr>
      <footer className="bg-[#011627]  mx-1 h-[125px] p-2 mt-1 mb-2 justify-center items-center">
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
              <h1 className="text-xl md:text-2xl">Gmail</h1>
            </div>
            <div>
              <h1 className="text-[10px] md:text-2xl">Korakodmice@gmail.com</h1>
            </div>
          </div>
          <div className=" p-2 border-[#e71d36] border-2 h-[100px] md:h-[111px]">
            <h1 className="text-lg md:text-2xl mb-2">My CV Resume</h1>
            <button className=" bg-gray-400 p-2 text-lg md:text-2xl">
              Resume
            </button>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default App;
