import { Request, Response } from "express"

export default async function interact(req: Request, res: Response) {
  return res.status(200).json({ message: "OK", body: req.body })
}
