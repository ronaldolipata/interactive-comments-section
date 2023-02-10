import express from 'express'

import create from '../controllers/users/create'

const router = express.Router()

router.post('/create', create)

export default router
