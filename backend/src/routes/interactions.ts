import express from "express"

import interact from "../controllers/interactions/interact"

const router = express.Router()

router.post("/interact", async (req, res) => await interact(req, res))

export default router
