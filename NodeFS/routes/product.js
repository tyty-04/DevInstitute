const express = require("express");
const {
  getProducts,
  productParams,
  productQuery,
  addProducts,
  updateProd,
  deleteProd,
} = require("../controllers/products");
const router = express.Router();

router.get("/api/products", getProducts);
router.get("/api/products/:id", productParams);
router.get("/api/search", productQuery);
router.get("/api/products", addProducts);
router.get("/api/products/:id", updateProd);
router.get("/api/products/:id", deleteProd);
