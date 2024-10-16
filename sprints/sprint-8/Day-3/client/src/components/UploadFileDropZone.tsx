import './App.css';
import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { useDropzone, FileRejection, FileError, File } from 'react-dropzone';

export const UploadFile = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        setFile(acceptedFiles[0]);
      } else {
        setFile(null);
        if (fileRejections && fileRejections.length > 0) {
          const errorMessages = fileRejections[0].errors
            .map((e: { code: string; message: string }) => e.message)
            .join(', ');
          setError(new Error(errorMessages));
        }
      }
    },
    []
  );

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      accept: 'image/*',
      maxSize: 1048576,
    });

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
        setError(null); // Clear any previous errors
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
        {/* Dropzone area */}
        <div
          {...getRootProps()}
          style={{
            border: '2px dashed #888',
            padding: '20px',
            textAlign: 'center',
            cursor: 'pointer',
          }}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
          {file && <p>Selected file: {file.name}</p>}
        </div>
        {/* Display file rejection errors */}
        {fileRejections.length > 0 && (
          <div>
            <h4>Files Rejected:</h4>
            <ul>
              {fileRejections.map(
                ({ file, errors }: { file: File; errors: FileError[] }) => (
                  <li key={file.path}>
                    {file.path} - {file.size} bytes
                    <ul>
                      {errors.map((e) => (
                        <li key={e.code}>{e.message}</li>
                      ))}
                    </ul>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
        <button type="submit">Upload</button>
      </form>
      {uploadedFile && <img src={uploadedFile} alt="Uploaded content" />}
      {error && (
        <p style={{ color: 'red' }}>Error uploading file: {error.message}</p>
      )}
    </div>
  );
};
