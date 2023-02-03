import "dotenv/config"

import express from "express"

import usersEndpoint from "./routes/users"
import interactionsEndpoint from "./routes/interactions"

async function main() {
  const app = express()
  const port = process.env.PORT || 4000
  const baseRoute = express.Router()

  app.use(express.json())

  baseRoute.use("/users", usersEndpoint)
  baseRoute.use("/interactions", interactionsEndpoint)

  app.use("/api/v1", baseRoute)

  app.listen(port, () => {
    // start server
    console.log("Server Started on http://localhost:" + port)
  })
}

main().catch(e => console.log("Internal Server Error:", e))
