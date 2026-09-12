import express from "express";
import cors from "cors";

import Email from "./email.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/Contact", Email);

app.listen(3001, () => {
  console.log("service is running at port 3001");
});
