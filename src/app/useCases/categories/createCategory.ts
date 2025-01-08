import { Category } from "../../models/Category";
import { Request, Response } from "express";

export async function createCategory(req: Request, res: Response) {
  const { name, icon } = req.body

  const category = await Category.create({ name, icon })

  res.status(201).json(category)
}