import "dotenv/config"

import express, { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

async function main() {
  const app = express()
  const port = process.env.PORT || 4000

  const prisma = new PrismaClient()

  

  app.listen(port, () => {
    console.log("Server Started on http://localhost:" + port)
  })
}

main().catch(e => console.log("Internal Server Error:", e))
