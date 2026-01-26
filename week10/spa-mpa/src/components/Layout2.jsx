import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout2 = (props) => {
  return (
    <>
      <Footer />
      {props.children}
      <Navbar />
    </>
  );
};

export default Layout2;
