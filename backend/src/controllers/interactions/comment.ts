import { Response } from 'express'

import IncomingRequest from '../../utils/requests'
import InteractionSchema, { Interaction } from '../../models/interactions'

export default async function handler(
  req: IncomingRequest<Interaction>,
  res: Response
) {
  return res.status(201).json({ message: 'OK!' })
}
