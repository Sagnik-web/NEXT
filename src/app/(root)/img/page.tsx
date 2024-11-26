'use client'

import React, { useState } from 'react';

function Img() {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null); // State to store the image URL for preview

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]; // Get the selected file
    setFile(selectedFile);
    
    // Generate the image URL for preview
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      setImageUrl(url); // Update the image URL state
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', 'Sagnik Biswas');

    try {
      const response = await fetch('http://localhost:5001/online-store/item/img', {
        method: 'PUT',
        body: formData,
      });

      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="file"
          name="file"
          onChange={handleFileChange}
        />
        {imageUrl && (
          <div>
            <h3>Preview:</h3>
            <img src={imageUrl} alt="Selected file" width="200" />
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Img;
