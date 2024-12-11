import React from 'react'

const ChosenSubject = () => {
    const subjects = [
        'Computational methods (2 Credits)',
        'Data Structures',
        'Foundation of Computer Science',
        'Object-Oriented Programming',
        'Operation System',
        'DLCD',
        'Engineering Economics',
      ];
    
  return (
    <>
      <div className="bg-green-100 p-6 rounded-lg mx-auto">
      <h2 className="text-lg font-semibold mb-4">Choose Subject</h2>
      <div className=" space-y-2">
        {subjects.map((subject, index) => (
          <button
            key={index}
            className="bg-white w-full py-2 rounded hover:bg-green-400 hover:font-semibold "
          >
            {subject}
          </button>
        ))}
      </div>
    </div>
    </>
  )
}

export default ChosenSubject
