import { Router } from "express"
import { listCategories } from "./useCases/categories/listCategories"
import { createCategory } from "./useCases/categories/createCategory"

export const router = Router()

//List categories
router.get('/categories', listCategories)

//Create category
router.post('/categories', createCategory)

//List products
router.get('/products', (req, res) => {
  res.json({ message: 'Hello World' })
})

//Get product by category
router.get('/categories/:categoryId/products', (req, res) => {
  res.json({ message: 'Hello World' })
})


//Create product
router.post('/products', (req, res) => {
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

