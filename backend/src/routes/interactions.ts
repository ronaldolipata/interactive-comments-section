import express from 'express'

import upvote from '../controllers/interactions/upvote'
import comment from '../controllers/interactions/comment'
import downvote from '../controllers/interactions/downvote'

const router = express.Router()

router.post('/comment', comment)

router.post('/upvote/:id', upvote)

router.post('/downvote/:id', downvote)

export default router
