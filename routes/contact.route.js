import express from "express";
import { contactController } from "../controller/contact.controller.js";
const router = express.Router();

router.post("/services", contactController);

export default router;
