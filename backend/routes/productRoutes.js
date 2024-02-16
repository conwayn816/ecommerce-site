import Express from "express";
const router = Express.Router();
import { protect, admin } from "../middleware/authMiddleware.js";
import {
  getProductById,
  getProducts,
  createProduct,
  updateProduct,
} from "../controllers/productController.js";

router.route("/").get(getProducts).post(protect, admin, createProduct);

router.route("/:id").get(getProductById).put(protect, admin, updateProduct);

export default router;
