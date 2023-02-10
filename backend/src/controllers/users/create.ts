import { Response } from 'express'

import UserSchema from '../../models/users'
import IncomingRequest from '../../utils/requests'

export type RequestBody = {
  username: string
  password: string
  email: string
}

export default async function handler(
  req: IncomingRequest<RequestBody>,
  res: Response
) {
  const { email, username, password } = req.body

  try {
    const createdUser = await UserSchema.create({ username, password, email })

    return res.status(200).json(createdUser)
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}
