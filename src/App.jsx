import { useState } from "react";

import "./App.css";
import Main from "./Component/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App  bg-[#011627] text-[#fdfffc]">
      <Main />
      <hr className="border border-gray-600 w-full"></hr>
    </div>
  );
}

export default App;
