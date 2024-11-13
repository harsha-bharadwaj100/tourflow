import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main"; // Add import statement for Main component
import Footer from "./Components/Footer/Footer"; // Add import statement for Footer component

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Main />
      <Footer />
    </>
  );
};

export default App;
