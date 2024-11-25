import React from 'react';
import Navbar from './Components/Navbar';
import Courses from './Components/Course';
import ChosenCourse from './Components/ChosenCourse';
import Subjects from './Components/Subjects';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className=" min-h-screen p-8">
        <div className=" sm:grid sm:grid-cols-2 sm:gap-10">
          <div className='mb-10'>
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



