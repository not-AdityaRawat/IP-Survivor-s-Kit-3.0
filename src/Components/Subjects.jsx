import React, { useState, useEffect } from 'react';

const Subjects = (props) => {
  const [subjects, setSubjects] = useState([]);

  // Fetch data from subjects.json
  const fetchData = async () => {
    try {
      let response = await fetch('/subjects.json');
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      let data = await response.json();
      setSubjects(data);
      console.log(data);
    } catch (error) {
      console.error("Error Fetching data:", error);
    }
  };

  // Fetch subjects data on component mount
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to ensure it runs once on mount

  // Filter subjects based on Semester and Branch
  const filteredSubjects = subjects.filter(subject => {
    // Filter by semester and branch
    const isCourseMatch = subject.course==props.chosencourse;
    const isSemesterMatch = subject.sem === parseInt(props.Semester);
    const isBranchMatch = Array.isArray(subject.branch)
                          ? subject.branch.includes(props.Branch) // If `branch` is an array
                          : subject.branch === props.Branch; // If `branch` is a string

    return (
      isCourseMatch && isSemesterMatch && isBranchMatch
    );
  });

  return (
    <div className="bg-green-100 p-6 rounded-lg mx-auto">
      <h2 className="text-lg font-semibold mb-4">Choose Subject</h2>
      <div className="space-y-2">
        {/* Display the filtered subjects */}
        {filteredSubjects.length > 0 ? (
          filteredSubjects.map((subject,index) => (
            <button
              key={index}
              className="bg-white w-full py-2 rounded hover:bg-green-400 hover:font-semibold"
            >
             ({subject.code}) {subject.name}<span className='text-xs font-mono text-green-800'>  Credits: {subject.credits}</span>  
            </button>
          ))
        ) : (
          <p>No subjects available for the selected semester and branch.</p>
        )}
      </div>
    </div>
  );
};

export default Subjects;
