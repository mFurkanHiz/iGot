const express = require("express");
const productModel = require("../models/ProductModel");
const router = express.Router();

//#region ADD PRODUCT

const PRODUCTS_END_POINT = "/getProducts";

router.get(PRODUCTS_END_POINT, async (req, res) => {
  try {
    const products = await productModel.find({});
    res.send(products);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
});
//#endregion

module.exports = router;
