import express from 'express'
import comment from '../controllers/interactions/comment'

const router = express.Router()

router.post('/comment', comment)

export default router
