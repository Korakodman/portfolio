import { useState } from "react";

import "./App.css";
import Header from "./Component/Header";
import Main from "./Component/Main";
import MainFooter from "./Component/Footer/mainFooter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App  bg-[#011627] text-[#fdfffc]">
      <Header />
      <Main />
      <hr className="border border-gray-600 w-full"></hr>
      <MainFooter />
    </div>
  );
}

export default App;
