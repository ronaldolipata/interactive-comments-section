import { Response } from 'express'

import IncomingRequest from '../../utils/requests'
import InteractionSchema, {
  Interaction,
  InteractionType
} from '../../models/interactions'

export default async function handler(
  req: IncomingRequest<Interaction>,
  res: Response
) {
  try {
    const interaction = await InteractionSchema.create({
      type: InteractionType.Comment,
      content: 'Sample Contents'
    })

    return res.status(201).json(interaction)
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}
