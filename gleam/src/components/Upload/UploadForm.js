import React from 'react';

const UploadForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('csvFile', e.target.csvFile.files[0]);

    try {
      const response = await fetch('/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Upload successful');
      } else {
        console.error('Upload failed');
      }
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="csvFile" accept=".csv" />
      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadForm;
