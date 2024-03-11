const axios = require("axios");

const apiUrl = "http://localhost:3000"; // Change this if your server is hosted elsewhere

const createIssue = async (issue) => {
  const response = await axios.post(`${apiUrl}/create`, issue);
  console.log("Create Response:", response.data);
};

const readIssue = async () => {
  const response = await axios.get(`${apiUrl}/read`);
  console.log("Read Response:", response.data);
};

const updateIssue = async (issue) => {
  const response = await axios.put(`${apiUrl}/update`, issue);
  console.log("Update Response:", response.data);
};

const deleteIssue = async (issue) => {
  const response = await axios.delete(`${apiUrl}/delete`, { data: issue });
  console.log("Delete Response:", response.data);
};

// Example Usage
const exampleIssue = {
  id: 1,
  title: "Example Issue",
  description: "This is an example issue.",
};

createIssue(exampleIssue);
readIssue();
updateIssue({ ...exampleIssue, description: "Updated description." });
deleteIssue(exampleIssue);
