import { Category } from "../../models/Category";
import { Request, Response } from "express";

export async function createCategory(req: Request, res: Response) {
  try {

    const { name, icon } = req.body

    const category = await Category.create({ name, icon })

    res.status(201).json(category)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}