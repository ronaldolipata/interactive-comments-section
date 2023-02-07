import { Response } from 'express'

import IncomingRequest from '../../utils/requests'
import InteractionSchema, { Interaction } from '../../models/interactions'

export default async function handler(
  req: IncomingRequest<Interaction>,
  res: Response
) {
  const { type, content } = req.body

  try {
    const interaction = await InteractionSchema.create({ type, content })
    return res.status(201).json(interaction)
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}
