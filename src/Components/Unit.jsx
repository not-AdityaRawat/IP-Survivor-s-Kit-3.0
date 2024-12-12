import React, { useState, useEffect } from "react";
import {
  FiExternalLink,
  FiThumbsUp,
  FiThumbsDown,
  FiArrowLeftCircle,
} from "react-icons/fi";
import { useNavigate } from "react-router";

const Unit = (props) => {
  const [unit, setUnit] = useState([]);
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState(null); // To handle fetch errors

  const fetchData = async () => {
    try {
      const response = await fetch("/Units.json");
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      const data = await response.json();
      setUnit(data);
      console.log("Fetched Data: ", data);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setError(error.message);
    } finally {
      setLoading(false); // Ensure loading state is false
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();

  // Filtering units based on props
  const filteredUnits = unit.filter((unit) => {
    const subjectNameChosen = unit.subjectname === props.subjectname;
    const unitNameChosen = unit.unitname === props.unitname;
    return subjectNameChosen && unitNameChosen;
  });

  console.log("Selected Subject: ", props.subjectname);
  console.log("Selected Unit: ", props.unitname);
  console.log("Filtered Units: ", filteredUnits);

  return (
    <div className="bg-teal-700 p-6 rounded-lg mx-auto max-w-4xl h-max">
      {/* Header */}
      <h1 className="text-2xl text-white font-semibold mb-6 text-center">
        <FiArrowLeftCircle
          className="cursor-pointer inline-block"
          onClick={() => navigate("/")}
        />{" "}
        {props.subjectname}
      </h1>

      {/* Unit Selector */}
      <div className="mb-4">
        <button className="bg-green-200 text-green-800 px-4 py-2 rounded-xl font-semibold flex items-center gap-2 shadow-md">
          {props.unitname} <span className="text-lg rotate-90">&gt;</span>
        </button>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 h-max overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-900 scrollbar-track-transparent scrollbar-thumb-rounded-full">
        {/* Handling loading state */}
        {loading ? (
          <p className="text-white">Loading...</p>
        ) : error ? (
          <p className="text-red-400">Error: {error}</p>
        ) : filteredUnits.length > 0 ? (
          filteredUnits.map((unit, index) => (
            <div
              key={index}
              className="bg-green-100 p-4 rounded-lg shadow-md flex flex-col justify-between"
            >
              <h2 className="text-lg font-semibold mb-2">{unit.title}</h2>
              <p className="text-sm text-gray-600 mb-2">
                Uploaded by {unit.uploadedBy}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-green-800">
                  <button className="flex items-center gap-1">
                    <FiThumbsUp /> {unit.upvotes}
                  </button>
                  <button>
                    <FiThumbsDown />
                  </button>
                </div>
                <button>
                  <FiExternalLink className="text-green-800 text-xl" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">
            No subjects available for the selected semester and branch.
          </p>
        )}
      </div>
    </div>
  );
};

export default Unit;
