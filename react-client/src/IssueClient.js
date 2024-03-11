import React, { useState, useEffect } from "react";
import axios from "axios";

const apiUrl = "http://localhost:3001/issues";

const IssueClient = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    getIssues();
  }, []);

  const createIssue = async () => {
    const exampleIssue = {
      title: "New Issue",
      description: "This is a new issue.",
    };

    try {
      const response = await axios.post(`${apiUrl}/`, exampleIssue);
      console.log("Create Response:", response.data);
      getIssues();
    } catch (error) {
      console.error("Error creating issue:", error.message);
    }
  };

  const getIssues = async () => {
    try {
      const response = await axios.get(`${apiUrl}/`);
      setIssues(response.data);
    } catch (error) {
      console.error("Error getting issues:", error.message);
    }
  };

  const updateIssue = async (issueId) => {
    const updatedIssue = { description: "Updated description." };

    try {
      const response = await axios.put(`${apiUrl}/${issueId}`, updatedIssue);
      console.log("Update Response:", response.data);
      getIssues();
    } catch (error) {
      console.error("Error updating issue:", error.message);
    }
  };

  const deleteIssue = async (issueId) => {
    try {
      const response = await axios.delete(`${apiUrl}/${issueId}`);
      console.log("Delete Response:", response.data);
      getIssues();
    } catch (error) {
      console.error("Error deleting issue:", error.message);
    }
  };

  return (
    <div>
      <div className="container">
        <h1>Issues</h1>
        <button onClick={createIssue}>Create Issue</button>
        <button onClick={getIssues}>Read All Issues</button>
      </div>
      <ul>
        {issues.map((issue) => (
          <li key={issue.id}>
            <strong>{issue.title}</strong>
            <p>{issue.description}</p>
            <button onClick={() => updateIssue(issue.id)}>Update</button>
            <button onClick={() => deleteIssue(issue.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IssueClient;
