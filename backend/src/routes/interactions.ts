import express from 'express'

import upvote from '../controllers/interactions/upvote'
import comment from '../controllers/interactions/comment'

const router = express.Router()

router.post('/comment', comment)

router.post('/upvote/:id', upvote)

export default router
