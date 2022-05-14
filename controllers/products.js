const Product = require("../models/product")

const getProduct = async (req, res) => {
    const { featured, name, company, sort, fields, numericFilters } = req.query
    const queryObject = {}

    if (featured) {
        queryObject.featured = featured === 'true' ? true : false
    }
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' }
    }
    if (company) {
        queryObject.company = company
    }
    if (numericFilters) {
        const operationMap = {
            ">": "$gt",
            ">=": "$gte",
            "=": "$eq",
            "<": "$lt",
            "<=": "$lte",
        }
        const regEx = /\b(<|>|<=|>=|=)\b/g
        let filters = numericFilters.replace(regEx, (match) => `-${operationMap[match]}-`)
        const options = ['price', 'rating']
        filters = filters.split(',').forEach((item) => {
            const [field, operator, value] = item.split("-")
            if (options.includes(field)) {
                queryObject[field] = { [operator]: Number(value) }
            }
        })
    }
    console.log(queryObject)
    let result = Product.find(queryObject)
    if (sort) {
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
    } else {
        result = result.sort('createdAt')
    }

    if (fields) {
        const fieldsList = fields.split(',').join(' ')
        result = result.select(fieldsList)
    }

    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page - 1) * limit

    result = result.skip(skip).limit(limit)

    const products = await result
    res.status(200).json({ products, nbHits: products.length })
}

const updateProduct = async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (!product) {
        res.status(404).json({ "msg": `Product not found ... check if your id:${req.params.id} is correct.` })
    } else {
        const updateProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
        res.status(200).json({ "Product Updated:": updateProduct })
    }
}
const deleteProduct = async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (!product) {
        res.status(404).json({ "msg": `Product not found ... check if your id:${req.params.id} is correct.` })
    }
    await Product.findByIdAndDelete(req.params.id)
    res.status(204).json({ "msg": "Product deleted succesfully...." })

}
const getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (!product) {
        res.status(404).json({ "msg": "Product Not found....try again later." })
    }
    res.status(200).json({ "product": product })
}
const createProduct = async (req, res) => {
    const { name, featured, rating, price, company } = req.body
    const product = new Product({
        name: name,
        featured: featured,
        rating: rating,
        price: price,
        company: company
    })
    const savedProduct = await product.save()
    res.status(201).json({ "product": savedProduct })

}


module.exports = { getProduct, createProduct, getProductById, deleteProduct, updateProduct }