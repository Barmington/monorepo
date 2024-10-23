import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/message", function (request, response) {
  response.json("wow, nice project!");
});

app.listen(3000, function () {
  console.log("Running on port 3000");
});
