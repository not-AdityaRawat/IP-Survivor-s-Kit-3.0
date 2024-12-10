import React from "react";
import Navbar from "./Components/Navbar"
import Courses from "./Components/Course";
import ChosenCourse from "./Components/ChosenCourse";
import Subjects from "./Components/Subjects";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    alert("THE PAGE IS UNDER CONSTRUCTION");
  }, []);
  return (
    <div>
      <Navbar/>
      <div className=" min-h-screen p-8">
        <div className=" sm:grid sm:grid-cols-2 sm:gap-10">
          <div className="mb-10"> {/*This is for mobile resolution*/}
            <Courses />
            <ChosenCourse />
          </div>
          <Subjects />
        </div>
      </div>
    </div>
  );
};

export default App;
