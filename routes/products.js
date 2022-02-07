const { getProduct, createProduct, getProductById, deleteProduct, updateProduct } = require("../controllers/products")
const router = require("express").Router()

// router.get("/static", getProductsStatic)
router.get("/", getProduct)
router.get("/:id", getProductById)
router.patch("/:id", updateProduct)
router.delete("/:id", deleteProduct)
router.post("/", createProduct)


module.exports = router