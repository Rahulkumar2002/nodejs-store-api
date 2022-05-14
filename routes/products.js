const { getProduct, createProduct, getProductById, deleteProduct, updateProduct } = require("../controllers/products")
const router = require("express").Router()



/**
 * @swagger 
 * definitions:
 *  Product:
 *      type: object
 *      required: 
 *          - name 
 *          - price 
 *      properties:
 *            name:
 *              type: string 
 *            price:
 *              type: integer 
 *            featured:
 *              type: boolean 
 *            rating:
 *              type: integer 
 *            company:
 *              type: string       
*/


/**
 * @swagger 
 * /api/v1/products/:
 *  get:
 *      description : Get all products
 *      responses : 
 *          200:
 *              description : Success
 * 
*/
router.get("/", getProduct)
/**
 * @swagger 
 * /api/v1/products/{id}:
 *  get:
 *      description : Get a product by its ID
 *      parameters:
 *          - in: path
 *            name: id 
 *            schema: 
 *              type: string 
 *            required: true
 *            description: Id of the product. 
 *      responses: 
 *          200:
 *              description: Success
 * 
*/
router.get("/:id", getProductById)
/**
 * @swagger 
 * /api/v1/products/{id}:
 *     put:
 *          description: Update a product with its ID 
 *          consumes:
 *              - application/json  
 *          produces:
 *              - applications/json       
 *          parameters:
 *              - in: path
 *                name: id 
 *                schema:
 *                  type: string 
 *                required: true
 *                description: Id of the product.
 *              - in: body
 *                name: Product
 *                description: To create a product.
 *                schema:
 *                  $ref: "#/definitions/Product"
 *          responses:
 *              200:
 *                  description: Product successfully updated.       
 *                  schema:
 *                      #ref: "#/definitions/Product"     
 *              404:
 *                  description: Product not found.
*/
router.put("/:id", updateProduct)
/**
 * @swagger 
 * /api/v1/products/{id}:
 *  delete:
 *      description : Delete a product by its ID
 *      parameters:
 *          - in: path
 *            name: id 
 *            schema: 
 *              type: string 
 *            required: true
 *            description: Id of the product. 
 *      responses: 
 *          204:
 *              description: Success deleted the product.
 * 
*/
router.delete("/:id", deleteProduct)

/**
 * @swagger 
 * /api/v1/products/:
 *     post:
 *         description: create a new product  
 *         consumes:
 *              - application/json
 *         produces:
 *              - applications/json  
 *         parameters:
 *              - in: body
 *                name: Product
 *                description: To create a product.
 *                schema:
 *                  $ref: "#/definitions/Product"
 *         responses:
 *              201:
 *                  description: Product successfully created.       
 *                  schema:
 *                      #ref: "#/definitions/Product"     
 *              500:
 *                  description: Some internal server error occured.
*/

router.post("/", createProduct)


module.exports = router