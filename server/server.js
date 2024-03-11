const express = require("express");

const issuesRouter = require("./routes/issues.router");

const app = express();

const PORT = 3000;

app.use(express.json());

app.use("/issues", issuesRouter);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
