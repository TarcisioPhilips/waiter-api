import path from "node:path"

import { Router } from "express"
import multer from "multer"

import { listCategories } from "./app/useCases/categories/listCategories"
import { createCategory } from "./app/useCases/categories/createCategory"
import { listProducts } from "./app/useCases/products/listProducts"
import { createProduct } from "./app/useCases/products/createProduct"

export const router = Router()

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'))
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
router.get('/categories/:categoryId/products', (req, res) => {
  res.json({ message: 'Hello World' })
})


//List orders
router.get('/orders', (req, res) => {
  res.json({ message: 'Hello World' })
})

//Create order
router.post('/orders', (req, res) => {
  res.json({ message: 'Hello World' })
})

//Change order status
router.patch('/orders/:orderId', (req, res) => {
  res.json({ message: 'Hello World' })
})

//Delete/cancel order
router.delete('/orders/:orderId', (req, res) => {
  res.json({ message: 'Hello World' })
})
