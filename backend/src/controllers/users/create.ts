import { Response } from 'express'
import { hash } from 'bcrypt'

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

  const hashPassword = await hash(password, 10)

  try {
    const createdUser = await UserSchema.create({
      username,
      password: hashPassword,
      email
    })

    return res.status(200).json({
      _id: createdUser.id,
      username: createdUser.username,
      email: createdUser.email,
      createdAt: createdUser.createdAt,
      updatedAt: createdUser.updatedAt
    })
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}
