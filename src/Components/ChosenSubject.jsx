import React from 'react';
import dropdownWHite from '../icons/dropdownWHite.png'

const ChosenSubject = () => {
  const subjects = [
    'UNIT-1',
    'UNIT-2',
    'UNIT-3',
    'UNIT-4'
  ];

  return (
    <div className="bg-teal-700 p-6 rounded-lg mx-auto">
  <h2 className="text-lg text-white font-semibold mb-4 text-center">Data Structure</h2>
  <div className="space-y-2">
    {subjects.map((subject, index) => (
      <button
        key={index}
        className="bg-white w-full p-2 rounded text-start hover:bg-green-100 hover:font-semibold flex items-center justify-between"
      >
        <span>{subject}</span>
        <img src={dropdownWHite} alt="arrow" className="w-3.5 h-3 -rotate-90" />
      </button>
    ))}
  </div>
</div>

  );
};

export default ChosenSubject;
