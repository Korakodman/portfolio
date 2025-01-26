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
          <div className="border-2 border-gray-400 p-2  ">
            <div className="text-2xl">
              <h1 className="text-2xl mb-2">My Github</h1>
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
          <div>
            <div className="p-2">
              <h1 className="text-2xl mb-2">Gmail</h1>
              <h1 className="text-2xl mb-2">Korakodmice@gmail.com</h1>
            </div>
          </div>
          <div>
            <h1 className="text-2xl mb-2">My CV Resume</h1>
            <button className=" bg-gray-400 p-2 text-2xl">Resume</button>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default App;
