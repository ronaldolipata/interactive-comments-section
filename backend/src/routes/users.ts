import express from "express"
import { create } from "../controllers/users"

const router = express.Router()

// create user route
router.post("/create", async function (req, res) {
  return await create(req, res)
})

export default router
