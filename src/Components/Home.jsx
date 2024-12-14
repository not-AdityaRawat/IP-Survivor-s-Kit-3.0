import React, { useState } from "react";
import Courses from "./Course";
import ChosenCourse from "./ChosenCourse";
import Subjects from "./Subjects";
import ChosenSubject from './ChosenSubject';
import Unit from './Unit'

const Home = (props) => {
  const [isBtech, setIsBtech] = useState(false);
  const [isMCA, setIsMCA] = useState(false);
  const [semester, setSemester] = useState(null);
  const [branch, setBranch] = useState(null);
  const [subjectAppear, setSubjectAppear] = useState(false);
  const [chosenSubjectAppear, setChosenSubjectAppear] = useState(false);
  const [addSubjectNameToChosenSubject, setAddSubjectNameToChosenSubject] = useState("");
  const [unitname, setunitname] = useState(null)
  const [Unitappear, setUnitappear] = useState(false)

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
    setUnitappear(true)
    setChosenSubjectAppear(false)
  }
  const handleGoBacktoChosenSubject=()=>{
    setUnitappear(false)
    setChosenSubjectAppear(true)
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

          {Unitappear && <Unit subjectname={addSubjectNameToChosenSubject} unitname={unitname} goToChosenSubject={handleGoBacktoChosenSubject}/>}
        </div>
      </div>
    </div>
  );
};

export default Home;