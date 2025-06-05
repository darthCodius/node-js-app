const path = require("path");

const rootDir = require("../utils/path");
const adminData = require("./admin");

const express = require("express");

const routes = express.Router();

routes.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", {
    prods: products,
    docTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

module.exports = routes;
