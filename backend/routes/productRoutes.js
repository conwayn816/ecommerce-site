import Express from "express";
const router = Express.Router();
import { protect, admin } from "../middleware/authMiddleware.js";
import {
  getProductById,
  getProducts,
  createProduct,
} from "../controllers/productController.js";

router.route("/").get(getProducts).post(protect, admin, createProduct);

router.route("/:id").get(getProductById);

export default router;
