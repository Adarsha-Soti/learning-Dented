import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import NotToDoList from "./components/NotToDoList";
import InputValues from "./components/InputValues";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <NotToDoList />

      {/* <InputValues /> */}
    </>
  );
}

export default App;
