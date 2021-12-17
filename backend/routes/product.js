import express from "express";
import {productsController,productsByIdController} from "../controllers/product.js"
const api = express.Router();
api.get("/products",productsController)
api.get("/products/:productId",productsByIdController)
export default api
