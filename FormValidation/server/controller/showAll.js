import Express from "express";
import { pool } from "../index.js";

const showAll = async (req, res) => {
  console.log("hey");
  pool.query(`select * from main`, (err, results) => {
    if (err) {
      console.log(results.rows);
    } else {
      console.log(results.rows);

      res.send(results.rows);
    }
  });
};
export default showAll;
