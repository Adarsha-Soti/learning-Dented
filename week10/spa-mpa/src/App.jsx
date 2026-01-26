import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Layout2 from "./components/Layout2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Navbar /> */}
      {/* Routes */}
      {/* /home ->  Hero Component */}
      {/* localhost:5173/about -> About Component */}

      <Routes>
        <Route
          index
          element={
            <Layout>
              <Hero/>
            </Layout>
          }
        />
        <Route
          path="about"
          element={
            <Layout2>
              <About />
            </Layout2>
          }
        />
      </Routes>
      {/* <Hero />
      <About /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
