import React, { useState, useEffect } from "react";

const ChosenCourse = (props) => {
  const BtechSems = [
    "Select Semester",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
  ];
  const McaSems = [
    "Select Semester",
    "Semester 1",
    "Semester 2",
    "Semester 3",
    "Semester 4",
  ];
  const Subjects = [
    "Computer Science",
    "IT",
    "Electronics",
    "CSAI",
    "CSDS",
  ];

  const [semester, setSemester] = useState(null);
  const [branch, setBranch] = useState(null);

  useEffect(() => {
    // Logging the updated values using useEffect to ensure they're updated properly
    console.log(`Updated Semester: ${semester}, Updated Branch: ${branch}`);
  }, [semester, branch]); // Runs when either 'semester' or 'branch' state changes

  const handleSemesterChange = (e) => {
    const selectedSemester = e.target.value;
    setSemester(selectedSemester);
    props.onSemesterAndBranchChange(selectedSemester, branch);
  };

  const handleBranchChange = (e) => {
    const selectedBranch = e.target.value;
    setBranch(selectedBranch);
    props.onSemesterAndBranchChange(semester, selectedBranch);
  };

  return (
    <div className="bg-teal-700 p-8 w-4/5 mx-auto rounded-lg mt-4 border-2 border-black">
      <h2 className="text-lg font-semibold mb-4 text-white">{props.chosencourse}</h2>
      <div className="space-y-6">
        <select
          className="w-full font-semibold py-2 px-4 bg-white rounded border"
          onChange={handleSemesterChange}
        >
          {props.chosencourse === "BTech"
            ? BtechSems.map((sems, index) => (
                <option key={index}>{sems}</option>
              ))
            : McaSems.map((sems, index) => <option key={index}>{sems}</option>)}
        </select>

        <select
          className="w-full font-semibold py-2 px-4 bg-white rounded border"
          onChange={handleBranchChange}
        >
          {props.chosencourse === "BTech" ? (
            Subjects.map((sems, index) => <option key={index}>{sems}</option>)
          ) : (
            <option>Software Technology</option>
          )}
        </select>
      </div>
    </div>
  );
};

export default ChosenCourse;
