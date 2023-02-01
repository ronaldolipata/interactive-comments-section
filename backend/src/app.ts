import express, { Request, Response } from "express"

async function main() {
  const app = express()

  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "Server OK" })
  })

  app.listen(4000, () => {
    console.log("Server Started")
  })
}

main().catch(e => console.log("Internal Server Error:", e))
