const model = require("../models/issues.models");

function postIssue(req, res) {
  if (!req.body.title) {
    res.status(400).json({
      error: "Missing Issue title",
    });
  }

  const newIssue = {
    title: req.body.title,
    description: req.body.description,
    id: model.length,
  };
  model.push(newIssue);
  res.json(newIssue);
}

function getIssues(req, res) {
  res.json(model);
}

function getIssue(req, res) {
  const issueId = Number(req.params.issueId);
  const issue = model[issueId];
  if (issue) {
    res.status(200).json(issue);
  } else {
    res.status(404).json({
      error: "issue does not exist",
    });
  }
}

function updateIssue(req, res) {
  const issueId = Number(req.params.issueId);
  const issue = model[issueId];
  console.log("Updated:", issueId, issue);
  const updatedIssue = req.body;
  const index = model.findIndex((issue) => issue.id === parseInt(issueId));

  if (index !== -1) {
    model[index] = { ...model[index], ...updatedIssue };
    console.log("Updated:", model[index]);
    res.json(model[index]);
  } else {
    res.status(404).json({ message: "Issue not found" });
  }
}

function deleteIssue(req, res) {
  const issueId = Number(req.params.issueId);
  const index = model.findIndex((issue) => issue.id === parseInt(issueId));

  if (index !== -1) {
    const deletedIssue = model.splice(index, 1)[0];
    console.log("Deleted:", deletedIssue);
    res.json(deletedIssue);
  } else {
    res.status(404).json({ message: "Issue not found" });
  }
}

module.exports = {
  postIssue,
  getIssues,
  getIssue,
  updateIssue,
  deleteIssue,
};
