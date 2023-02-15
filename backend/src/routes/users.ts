import express from 'express'

import create from '../controllers/users/create'
import authenticate from '../controllers/users/authenticate'

const router = express.Router()

router.post('/create', create)
router.post('/authenticate', authenticate)

export default router
