import 'dotenv/config'

import express from 'express'
import limiter from 'express-rate-limit'
import cors from 'cors'
import helmet from 'helmet'

import mongoose from 'mongoose'

import usersEndpoint from './routes/users'
import interactionsEndpoint from './routes/interactions'

async function main() {
  const app = express()
  const port = process.env.PORT || 4000
  const baseRoute = express.Router()

  const limit = limiter({ windowMs: 15 * 60 * 1000, max: 100 })

  await mongoose.connect(process.env.DATABASE_URL)

  app.use(limit)
  app.use(cors({ origin: process.env.FONTEND_URL }))
  app.use(helmet())
  app.use(express.json())

  baseRoute.use('/users', usersEndpoint)
  baseRoute.use('/interactions', interactionsEndpoint)

  app.use('/api/v1', baseRoute)

  app.listen(port, () => {
    console.log('Server Started on http://localhost:' + port)
  })
}

main().catch(e => console.log('Internal Server Error:', e))
