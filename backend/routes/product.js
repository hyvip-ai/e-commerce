import express from "express";
import {productsController} from "../controllers/product.js"
const api = express.Router();
api.get("/products",productsController)
export default api
