import { Response } from "express"
import { Interaction, Prisma, PrismaClient } from "@prisma/client"

import prisma from "../../utils/prisma"
import IncomingRequest from "../../utils/requests"

type InteractionPayload = Pick<Interaction, "type" | "content"> & {}

export default async function interact(
  req: IncomingRequest<InteractionPayload>,
  res: Response
) {
  const { type, content } = req.body

  try {
    const interaction = await prisma.interaction.create({
      data: { type, content },
    })

    return res.status(201).json(interaction)
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.log("ECODE: ", error.code, "EMSG: ", error.message)
    }
    return res.status(500).end()
  }
}
