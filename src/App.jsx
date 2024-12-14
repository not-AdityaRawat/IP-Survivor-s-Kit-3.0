import React from "react";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home"
const App = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
  </>
)
};

export default App;
