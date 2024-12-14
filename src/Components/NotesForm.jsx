import React from "react";

const NotesForm = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4 text-center">Share Your Notes</h2>

      <form className="bg-white shadow-lg rounded-lg p-4 mb-8 w-full">
        <input
          type="text"
          placeholder="Notes Title"
          className="w-full p-3 mb-4 border border-gray-400 rounded focus:outline-none focus:ring focus:ring-yellow-500 transition-all"
        />
        <div className="flex space-x-4 mb-4">
          <select
            className="w-1/2 p-3 border border-gray-400 rounded focus:outline-none focus:ring focus:ring-yellow-500"
          >
            <option>Select Subject</option>
            <option>Mathematics</option>
            <option>Physics</option>
          </select>
          <select
            className="w-1/2 p-3 border border-gray-400 rounded focus:outline-none focus:ring focus:ring-yellow-500"
          >
            <option>Select Unit</option>
            <option>Unit-1</option>
            <option>Unit-2</option>
            <option>Unit-3</option>
            <option>Unit-4</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 mb-4 border border-gray-400 rounded focus:outline-none focus:ring focus:ring-yellow-500 transition-all"
        />
        <input
          type="text"
          placeholder="Your Roll Number"
          className="w-full p-3 mb-4 border border-gray-400 rounded focus:outline-none focus:ring focus:ring-yellow-500 transition-all"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-700 text-white font-medium rounded hover:bg-green-800 transition-colors w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NotesForm;
