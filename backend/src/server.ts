import "dotenv/config"

import express from "express"
import userEndpoint from "@routes/users"

async function main() {
  const app = express()
  const port = process.env.PORT || 4000
  const baseRoute = express.Router()

  app.use(express.json())
  app.use("/api/v1", baseRoute)
  baseRoute.use("/users", userEndpoint)
  // baseRoute.use("/posts", userEndpoint)

  app.listen(port, () => {
    // start server
    console.log("Server Started on http://localhost:" + port)
  })
}

main().catch(e => console.log("Internal Server Error:", e))
