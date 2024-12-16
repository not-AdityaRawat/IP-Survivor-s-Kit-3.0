import React, { useState } from "react";
import axios from 'axios';

const UploadForm = ({ onUploadSuccess }) => {
  const [progress, setProgress] = useState('Or drop a file');
  const [uploadProgress, setUploadProgress] = useState(0); // State to track progress

  const handleUpload = async (e) => {
    const formData = new FormData();
    
    // Get the selected file from the file input field
    const file = e.target.files[0];  // 'e.target' refers to the <input> element

    // Check if a file is selected
    if (!file) {
      alert('Please select a file!');
      return;
    }

    // Append the file to the FormData object
    formData.append('notes', file);  // 'notes' is the name of the field on the server

    try {
      const response = await axios.post('/contribute', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        // Track the upload progress
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          const percent = Math.floor((loaded * 100) / total);
          setUploadProgress(percent); // Update the progress bar
          setProgress(`${percent}% uploading...`);
        },
      });
      
      alert(response.data.message);
      setProgress('File uploaded successfully');
      setUploadProgress(100); // Ensure the progress bar reaches 100%

      // Call any callback after successful upload (if needed)
      if (onUploadSuccess) {
        onUploadSuccess(response.data);
      }
    } catch (err) {
      alert('Error uploading file: ' + err.message);
      setProgress('Upload failed');
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4 text-center">Share Your Notes</h2>
      <div className="bg-white shadow-lg rounded-lg p-4 mb-8 w-full text-center hover:shadow-xl transition drop-shadow-xl">
        <label
          htmlFor="fileInput"
          className="px-4 py-2 bg-green-700 text-white font-medium rounded hover:bg-green-800 transition-colors cursor-pointer"
        >
          Upload the Notes PDF
        </label>
        <input 
          id="fileInput"
          type="file" 
          className="hidden" 
          onChange={handleUpload} // Trigger the file upload when file is selected
        />
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded mt-4">
          <div
            className="bg-green-600 h-2 rounded"
            style={{ width: `${uploadProgress}%` }}
          ></div>
        </div>

        <p className="mt-2 text-gray-600">{progress}</p>
      </div>
    </div>
  );
};

export default UploadForm;
