import express from "express";
import { defaultController } from "../controllers/default.js";
const api = express.Router();
api.get("/default", defaultController);

export default api;
