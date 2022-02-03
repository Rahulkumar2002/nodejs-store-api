//Filter functionality ......
require('dotenv').config()
const mongoose = require('mongoose')
const { exit } = require('process')
const Product = require("./models/product")
const jsonProducts = require("./products.json")


//Connecting to DB again ....
const start = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        await Product.deleteMany()
        await Product.create(jsonProducts)
        console.log("Connected to DB....")
        process.exit(0)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

start()