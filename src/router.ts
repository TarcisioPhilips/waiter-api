import path from "node:path"

import { RequestHandler, Router } from "express"
import multer from "multer"

import { listCategories } from "./app/useCases/categories/listCategories"
import { createCategory } from "./app/useCases/categories/createCategory"
import { listProducts } from "./app/useCases/products/listProducts"
import { createProduct } from "./app/useCases/products/createProduct"
import { listProductsByCategory } from "./app/useCases/categories/listProductsByCategory"
import { listOrders } from "./app/useCases/orders/listOrders"
import { createOrder } from "./app/useCases/orders/createOrder"
import { deleteOrder } from "./app/useCases/orders/deleteOrder"
import { changeOrderStatus } from "./app/useCases/orders/changeOrderStatus"

export const router = Router()

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'))
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`)
    },
  }),
})

//List categories
router.get('/categories', listCategories)

//Create category
router.post('/categories', createCategory)

//List products
router.get('/products', listProducts)

//Create product
router.post('/products', upload.single('image'), createProduct)

//Get product by category
router.get('/categories/:categoryId/products', listProductsByCategory)

//List orders
router.get('/orders', listOrders)

//Create order
router.post('/orders', createOrder)

//Change order status
router.patch('/orders/:orderId', changeOrderStatus as RequestHandler)

//Delete/cancel order
router.delete('/orders/:orderId', deleteOrder)

