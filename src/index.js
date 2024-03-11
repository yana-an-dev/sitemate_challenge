const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

let issues = [];

app.post("/create", (req, res) => {
  const newIssue = req.body;
  issues.push(newIssue);
  console.log("Created:", newIssue);
  res.json(newIssue);
});

app.get("/read", (req, res) => {
  const randomIndex = Math.floor(Math.random() * issues.length);
  const randomIssue = issues[randomIndex];
  console.log("Read:", randomIssue);
  res.json(randomIssue);
});

app.put("/update", (req, res) => {
  const updatedIssue = req.body;
  console.log("Updated:", updatedIssue);
  res.json(updatedIssue);
});

app.delete("/delete", (req, res) => {
  const deletedIssue = req.body;
  console.log("Deleted:", deletedIssue);
  res.json(deletedIssue);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
