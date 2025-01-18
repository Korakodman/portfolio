import { useState } from "react";

import "./App.css";
import Header from "./Component/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Header />
      <main className=" border-black border-2 h-full w-full p-2 ">
        {/* เนื้อหาหลัก */}
      </main>
      <footer className="border-2 border-red-500 p-2">Footer</footer>
    </div>
  );
}

export default App;
