const { getProductsStatic, getProduct } = require("../controllers/products")
const router = require("express").Router()

router.get("/static", getProductsStatic)
router.get("/", getProduct)

module.exports = router