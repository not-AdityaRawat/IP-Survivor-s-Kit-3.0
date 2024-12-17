import React, { useState, useEffect } from "react";
import { FiExternalLink, FiThumbsUp, FiThumbsDown, FiArrowLeftCircle,  } from "react-icons/fi";
import { useNavigate } from "react-router";

const Unit = (props) => {
  const [units, setUnits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch unit notes from the server
  const fetchUnits = async () => {
    try {
      const response = await fetch("http://localhost:3000/units"); // Route to fetch units
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      const data = await response.json();
      setUnits(data);
    } catch (err) {
      console.error("Error fetching notes:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  const countDowns=()=>{

  }
  const countUps=()=>{
    
  }
  useEffect(() => {
    fetchUnits();
  }, []);

  const filteredUnits = units.filter((unit) => {
    return (
      unit.isValid &&
      unit.subjectname === props.subjectname &&
      unit.unitname === props.unitname
    );
  });

  return (
    <>
      <div className="bg-teal-700 p-6 rounded-lg mx-auto max-w-4xl">
        <h1 className="text-2xl text-white font-semibold mb-6 text-center">
          <FiArrowLeftCircle className="cursor-pointer inline-block" onClick={() => navigate(-1)} />{" "}
          {props.subjectname}
        </h1>

        <div className="mb-4">
          <button className="bg-green-200 text-green-800 px-4 py-2 rounded-xl font-semibold flex items-center gap-2 shadow-md" onClick={() => navigate(-1)}>
            {props.unitname} <span className="text-lg rotate-90">&gt;</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto max-h-96">
          {loading ? (
            <p className="text-white font-mono">Loading...</p>
          ) : error ? (
            <p className="text-amber-600 font-semibold text-center"> Error: {error}</p>
          ) : filteredUnits.length > 0 ? (
            filteredUnits.map((unit, index) => (
              <div key={index} className="bg-green-100 p-4 rounded-lg shadow-md break-words">
                <h2 className="text-lg font-semibold mb-2">{unit.title}</h2>
                <p className="text-sm text-gray-600 mb-2">
                  Uploaded by {unit.uploadedBy}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-green-800">
                    <button onClick={countUps}>
                      <FiThumbsUp size={20} /> 
                     <p className="text-sm">{unit.upvotes}</p>
                    </button>
                    <button onClick={countDowns}>
                      <FiThumbsDown size={20}/> 
                      <p className="text-sm">{unit.downvotes}</p>
                    </button>
                  </div>
                  <a
                    href={unit.embeded}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-800 text-xl"
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white font-mono text-sm">No Notes available for the selected Unit.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Unit;
