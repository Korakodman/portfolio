import { useState } from "react";

import "./App.css";
import Header from "./Component/Header";
import Main from "./Component/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Main />
      <footer className="border-2 border-red-500 p-2">Footer</footer>
    </div>
  );
}

export default App;
