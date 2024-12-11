import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Courses from "./Components/Course";
import ChosenCourse from "./Components/ChosenCourse";
import Subjects from "./Components/Subjects";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About";

const Home = () => {
  const [isBtech, setIsBtech] = useState(false);
  const [isMCA, setIsMCA] = useState(false);
  const [semester, setSemester] = useState(null);
  const [branch, setBranch] = useState(null);
  const [subjectAppear, setsubjectAppear] = useState(false);

  const handleSelectedCourse = (e) => {
    if (e === "BTech") {
      setIsBtech(true);
      setIsMCA(false);
    } else if (e === "MCA") {
      setIsBtech(false);
      setIsMCA(true);
    }
    setsubjectAppear(true);
  };

  const handleSemesterAndBranchChange = (Semester, Branch) => {
    setSemester(Semester);
    setBranch(Branch);
    console.log(`Selected Semester: ${Semester}, Branch: ${Branch}`);
  };

  return (
    <div className="min-h-screen p-8">
      <div className="sm:grid sm:grid-cols-2 sm:gap-10">
        <div className="mb-10">
          <Courses
            seletedCourse={handleSelectedCourse}
            onSemesterAndBranchChange={handleSemesterAndBranchChange}
          />
          {isBtech && (
            <ChosenCourse
              chosencourse="BTech"
              onSemesterAndBranchChange={handleSemesterAndBranchChange}
            />
          )}
          {isMCA && (
            <ChosenCourse
              chosencourse="MCA"
              onSemesterAndBranchChange={handleSemesterAndBranchChange}
            />
          )}
        </div>
        <div className="mt-10">
          {subjectAppear && (
            <Subjects
              chosencourse={isBtech ? "BTech" : "MCA"}
              Semester={semester}
              Branch={branch}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: (
          <>
            <Navbar />
            <Home />
          </>
        ),
      },
      {
        path: "/about",
        element: (
          <>
            <Navbar />
            <About />
          </>
        ),
      },
    ],
    {
      future: {
        v7_fetcherPersist: true, // Opt-in to the v7 fetcher persistence behavior
      },
    }
  );
  

  return (
    <>
  <RouterProvider router={router} />
  </>
  );
};

export default App;
