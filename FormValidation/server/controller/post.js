import express from "express";

import { pool } from "../index.js";

export const createPost = async (req, res) => {
  let { username, dob, email, phone } = req.body;

  let errors = [];

  console.log({
    username,
    email,
    phone,
    dob,
  });

  var phoneno = /^\d{10}$/;
  if (!phone.match(phoneno)) {
    console.log("Enter a valid phone number");
    res.status(409).json("Enter a valid phone number");
  } else {
    pool.query(
      `INSERT INTO main (username,dob,email,phone)
    VALUES ('${username}','${dob}','${email}',${phone})`,
      (err, results) => {
        if (err) {
          res.status(409).json("Some Error occured");
          console.log(results.rows);
        } else res.status(201).json("User saved Successfully!");
      }
    );
  }
};
export default createPost;
