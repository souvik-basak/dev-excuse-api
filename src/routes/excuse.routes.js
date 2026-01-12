import express from "express";
import {getExcuse} from "../controllers/excuse.controller.js";

const router = express.Router();
router.get("/", getExcuse);

export default router;
