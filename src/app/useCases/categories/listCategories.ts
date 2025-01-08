import { Category } from "../../models/Category";
import { Request, Response } from "express";

export async function listCategories(req: Request, res: Response) {
  try {
    const categories = await Category.find()

    res.json(categories)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}