import express from "express";
import {
  getExcuse,
  getExcuseOfTheDay,
  getMeta
} from "../controllers/excuse.controller.js";

const router = express.Router();
router.get("/", getExcuse);
router.get("/today", getExcuseOfTheDay);
router.get("/meta", getMeta);

export default router;
