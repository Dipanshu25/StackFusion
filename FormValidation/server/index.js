import express from "express";
import bodyParser from "body-parser";

import cors from "cors";

import post from "./routes/post.js";
import get from "./routes/get.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();
import PG from "pg";
const Pool = PG.Pool;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/default", (req, res, next) => {
  console.log("the req obj --- ", req);
  res.json({
    data: "Hello World",
  });
});
const PORT = process.env.PORT;
app.use("/default", (req, res) => {
  res.send("Hello World");
});
app.use("/post", post);
app.use("/listRequest",get);

export const pool = new Pool({
  connectionString: process.env.CONNECTION_STRING,
});

app.listen(PORT, () =>
  console.log(`Server Running on Port: http://localhost:${PORT}`)
);
