import { Request, Response } from "express";
import { Product } from "../../models/Product";

export async function createProduct(req: Request, res: Response) {
  try {

    // const { name, description, price, category, ingredients } = req.body

    // const product = await Product.create({ name, description, price, category, ingredients })

    console.log(req.body)
    res.status(201).json({ message: 'Product created' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}


