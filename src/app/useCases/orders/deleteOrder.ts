import { Request, Response } from "express";
import { Order } from "../../models/Order";

export async function deleteOrder(req: Request, res: Response) {
  try {
    const { orderId } = req.params

    await Order.findByIdAndDelete(orderId)

    res.status(204).send()
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}