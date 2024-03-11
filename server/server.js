const express = require("express");

const cors = require("cors");

const issuesRouter = require("./routes/issues.router");

const app = express();

const PORT = 3001;

app.use(cors());

app.use(express.json());

app.use("/issues", issuesRouter);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
