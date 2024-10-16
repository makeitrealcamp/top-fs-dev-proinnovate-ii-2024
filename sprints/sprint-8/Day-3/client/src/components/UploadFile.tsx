import React, { useState } from 'react';
import axios from 'axios';

export const UploadFile = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    } else {
      setFile(null);
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!file) {
      console.error('No file selected');
      setError(new Error('No file selected'));
      return;
    }

    const url = 'http://localhost:3000/uploadFile';
    const formData = new FormData();
    formData.append('file', file, file.name);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    axios
      .post(url, formData, config)
      .then((response) => {
        console.log(response.data);
        setUploadedFile(response.data.file);
      })
      .catch((err) => {
        console.error('Error uploading file:', err);
        setError(
          err instanceof Error ? err : new Error('An unknown error occurred')
        );
      });
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>React File Upload</h1>
        <input type="file" onChange={handleChange} />
        <button type="submit">Upload</button>
      </form>
      {uploadedFile && <img src={uploadedFile} alt="Uploaded content" />}
      {error && <p>Error uploading file: {error.message}</p>}
    </div>
  );
};
