import express from "express";
// import { retrieveCheck } from "../../src/requests.js";

import createPost from "../controller/post.js";

const router = express.Router();

router.post("/", createPost);

export default router;
