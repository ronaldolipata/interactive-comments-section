import "dotenv/config"

import express, { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

async function main() {
  const app = express()
  const port = process.env.PORT || 4000

  const prisma = new PrismaClient()

  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "Server OK" })
  })

  app.post("/create", async (req: Request, res: Response) => {
    const user = await prisma.user.create({
      data: {
        username: "antonpalermoo",
      },
    })

    return res.status(201).json(user)
  })

  app.listen(port, () => {
    console.log("Server Started")
  })
}

main().catch(e => console.log("Internal Server Error:", e))
