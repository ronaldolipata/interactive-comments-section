import { Response } from 'express'
import { compare } from 'bcrypt'

import UserSchema from '../../models/users'
import IncomingRequest from '../../utils/requests'

export type RequestBody = {
  identity: string
  password: string
}

export default async function handler(
  req: IncomingRequest<RequestBody>,
  res: Response
) {
  const { identity, password } = req.body

  try {
    const user = await UserSchema.findOne({
      $or: [{ email: identity }, { username: identity }]
    })

    if (user) {
      const isMatched = await compare(password, user.password)

      if (isMatched) {
        return res.status(200).json({ message: 'Successfully authenticated' })
      }
    }

    return res.status(404).json({ error: `${identity} not found` })
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}
