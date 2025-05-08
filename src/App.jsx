import { useState } from "react";

import "./App.css";
import Main from "./Component/Main";

function App() {
  return (
    <div className="App  bg-neutral-900 text-[#fdfffc]">
      <Main />
      <hr className="border border-gray-600 w-full"></hr>
    </div>
  );
}

export default App;
