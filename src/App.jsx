import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Courses from "./Components/Course";
import ChosenCourse from "./Components/ChosenCourse";
import Subjects from "./Components/Subjects";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import ChosenSubject from './Components/ChosenSubject';
import Unit from './Components/Unit'
import Course from "./Components/Course";

const Home = () => {
  const [isBtech, setIsBtech] = useState(false);
  const [isMCA, setIsMCA] = useState(false);
  const [semester, setSemester] = useState(null);
  const [branch, setBranch] = useState(null);
  const [subjectAppear, setSubjectAppear] = useState(false);
  const [chosenSubjectAppear, setChosenSubjectAppear] = useState(false);
  const [addSubjectNameToChosenSubject, setAddSubjectNameToChosenSubject] = useState("");
  const [unitname, setunitname] = useState(null)

  const handleSelectedCourse = (course) => {
    if (course === "BTech") {
      setIsBtech(true);
      setIsMCA(false);
    } else if (course === "MCA") {
      setIsBtech(false);
      setIsMCA(true);
    }
    setSubjectAppear(true);
  };

  const handleSemesterAndBranchChange = (Semester, Branch) => {
    setSemester(Semester);
    setBranch(Branch);
    console.log(`Selected Semester: ${Semester}, Branch: ${Branch}`);
  };

  const handleSubjectSelect = (subjectName) => {
    setChosenSubjectAppear(true);
    setAddSubjectNameToChosenSubject(subjectName);
    setSubjectAppear(false)
  };
  const handleGoBacktoSubject=(e)=>{
    setChosenSubjectAppear(false);
    setSubjectAppear(true)
  }
  const handleselectedunit=(selectedunit)=>{
    setunitname(selectedunit);
  }

  return (
    <div className="min-h-screen p-8">
      <div className="sm:grid sm:grid-cols-2 sm:gap-10">
        <div className="mb-10">
          <Courses
            seletedCourse={handleSelectedCourse}
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
              onsubjectSelect={handleSubjectSelect}
            />
          )}
          {chosenSubjectAppear && (
            <ChosenSubject subjectname={addSubjectNameToChosenSubject} goback={handleGoBacktoSubject} selectedunit={handleselectedunit}/>
          )}
          <Unit subjectname={addSubjectNameToChosenSubject} unitname={unitname} />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const router = createBrowserRouter([
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
    {
      path: "/Btech",
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },
    {
      path: "/MCA",
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },
    {
      path: "/Btech",
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },
    {
      path: "/Btech/:sem",
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },
    {
      path: "/MCA/:sem",
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },
    {
      path: "/Btech/:sem/:branch",
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },
    {
      path: "/Btech/:sem/:branch/:subject",
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },
    {
      path: "/subject/:value",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/subject/:value/:value",
      element:(
        <>
        <Navbar/>
        <Course/>
        <ChosenCourse />
        <Unit/>
        </>
      )
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;
