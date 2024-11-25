import React from 'react';
import Navbar from './Components/Navbar';
import Courses from './Components/Course';
import BTech from './Components/ChosenCourse';
import Subjects from './Components/Subjects';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className=" min-h-screen p-8">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <Courses />
            <BTech />
          </div>
          <Subjects />
        </div>
      </div>
    </div>
  );
};

export default App;



