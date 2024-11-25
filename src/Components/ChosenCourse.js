// src/components/BTech.jsx
import React from 'react';

const ChosenCourse = () => {
  return (
    <div className="bg-green-100 p-6 rounded-lg mt-4">
      <h2 className="text-lg font-semibold mb-4">B.Tech</h2>
      <div className="space-y-4">
        <select className="w-full py-2 px-4 bg-white rounded border">
          <option>Semester</option>
          <option>Semester 1</option>
          <option>Semester 2</option>
        </select>
        <select className="w-full py-2 px-4 bg-white rounded border">
          <option>Branch</option>
          <option>Computer Science</option>
          <option>Mechanical</option>
        </select>
      </div>
    </div>
  );
};

export default ChosenCourse;
