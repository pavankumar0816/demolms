import React, { useState, useRef } from "react";
import axios from "axios";
import config from "../config";

export default function UploadAssessment() {
  const [formData, setFormData] = useState({
    file: null,
    description: "",
    saveAs: "",
  });
  const fileInputRef = useRef(null);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showCard, setShowCard] = useState(false); // State to control card visibility

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.file) {
      alert("Please select a file.");
      return;
    }
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("file", formData.file);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("saveAs", formData.saveAs);

      const response = await axios.post(
        `${config.url}/uploadassessment`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      if (response.status === 200) {
        setFormData({
          file: null,
          description: "",
          saveAs: "",
        });
        fileInputRef.current.value = "";
        setShowCard(false); // Hide the card after successful upload
      }
      setMessage(response.data);
      setError("");
    } catch (error) {
      setError(error.response.data);
      setMessage("");
    }
  };

  return (
    <div>
      <h3 align="center">
        <u>Upload Assessment</u>
      </h3>
      {message ? <h4 align="center">{message}</h4> : null}
      {error ? (
        <h4 align="center" style={{ color: "red" }}>
          {error}
        </h4>
      ) : null}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label>Content File</label>
          <input
            type="file"
            id="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit">Upload</button>
      </form>

      {/* Card containing description and save as labels */}
      {showCard && (
        <div className="card">
          <label>Description</label>
          <input
            type="text"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
          <label>Save As</label>
          <input
            type="text"
            value={formData.saveAs}
            onChange={(e) =>
              setFormData({ ...formData, saveAs: e.target.value })
            }
          />
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
