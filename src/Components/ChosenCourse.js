// src/components/BTech.jsx
import React from 'react';

const ChosenCourse = () => {
  return (
    <div className="bg-green-100 p-8 w-4/5 mx-auto rounded-lg mt-4">
      <h2 className="text-lg font-semibold mb-4">B.Tech</h2>
      <div className="space-y-6">
        <select className="w-full py-2 px-4 bg-white rounded border">
          <option>Semester</option>
          <option>Semester 1</option>
          <option>Semester 2</option>
          <option>Semester 3</option>
          <option>Semester 4</option>
          <option>Semester 5</option>
          <option>Semester 6</option>
          <option>Semester 7</option>
          <option>Semester 8</option>
        </select>
        <select className="w-full py-2 px-4 bg-white rounded border">
          <option>Branch</option>
          <option>Computer Science</option>
          <option>Information Technology</option>
          <option>Electronics</option>
        </select>
      </div>
    </div>
  );
};

export default ChosenCourse;
