import { Response } from 'express'

import IncomingRequest from '../../utils/requests'
import InteractionSchema, { Interaction } from '../../models/interactions'

type RequestBody = {
  count: number
}

export default async function handler(
  req: IncomingRequest<RequestBody>,
  res: Response
) {
  const id = req.params.id
  const count = req.body.count

  try {
    const comment = await InteractionSchema.findById(id)

    if (!comment) {
      return res.status(404).json({ error: `${id} is currently not available` })
    }

    Object.assign(comment, { upvotes: comment.upvotes - count })

    await comment.save()

    return res.status(200).json(comment)
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}
