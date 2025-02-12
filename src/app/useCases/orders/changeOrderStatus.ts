import { Request, Response } from "express";
import { Order } from "../../models/Order";

export async function changeOrderStatus(req: Request, res: Response) {
  try {
    const { status } = req.body
    const { orderId } = req.params

    if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
      return res.status(400).json({ error: 'Status should be one of these: WAITING, IN_PRODUCTION, DONE' })
    }

    await Order.findByIdAndUpdate(orderId, { status })


    res.status(204)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}