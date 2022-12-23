//importing required pacakages...
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const morgan = require("morgan");
const helmet = require("helmet");
require("express-async-errors"); //async wrappers
const errorHandlerMiddleware = require("./middlewares/error-handler");
const notFound = require("./middlewares/not-found");
const productsRoutes = require("./routes/products");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUiExpress = require("swagger-ui-express");
const app = express();
const port = 8080 || process.env.PORT;
dotenv.config();

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Store API",
      version: "1.0.0",
    },
  },
  apis: ['app.js' , './routes/products.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions); 
console.log(swaggerDocs) ; 



//Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/v1/products", productsRoutes);
app.use("/api-docs" , swaggerUiExpress.serve , swaggerUiExpress.setup(swaggerDocs)) ; 
app.use(notFound);
app.use(errorHandlerMiddleware);

// Connecting to server and DB ...
const start = async () => {
  try {
    mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("Connected to MongoDB..."));

    app.listen(port, () => {
      console.log(`App is listing at localhost:${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
