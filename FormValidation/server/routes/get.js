import express from "express";
// import { retrieveCheck } from "../../src/requests.js";

import showAll from "../controller/showAll.js";

const router = express.Router();

router.get("/", showAll);
export default router;
