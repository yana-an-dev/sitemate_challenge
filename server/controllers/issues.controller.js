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

module.exports = {
  postIssue,
  getIssues,
  getIssue,
};
