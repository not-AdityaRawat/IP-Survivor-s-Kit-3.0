import React from "react";
import Courses from "../Components/Course";

const Home = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="sm:grid sm:grid-cols-2 sm:gap-10">
        <div className="mb-10">
          <Courses/>
        </div>
        <div className="mt-10"></div>
      </div>
    </div>
  );
};

export default Home;
