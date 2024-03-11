const express = require("express");

const issuesController = require("../controllers/issues.controller");

const issuesRouter = express.Router();

issuesRouter.use((req, res, next) => {
  console.log("ip address", req.ip);
  next();
});

issuesRouter.post("/", issuesController.postIssue);
issuesRouter.get("/", issuesController.getIssues);
issuesRouter.get("/:issueId", issuesController.getIssue);

module.exports = issuesRouter;
