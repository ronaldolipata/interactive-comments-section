import { Response } from "express";
import { ActionType, Interaction, Prisma, PrismaClient } from "@prisma/client";

import IncomingRequest from "../../utils/requests";

type InteractionPayload = Pick<Interaction, "type" | "content"> & {};

export default function interact(
  req: IncomingRequest<InteractionPayload>,
  res: Response
) {
  const { type, content } = req.body;
  const prisma = new PrismaClient();

  return prisma.interaction
    .create({ data: { type, content } })
    .then((result) => res.status(201).json(result))
    .catch((e) => res.status(400).json({ error: "Error interact", stack: e }));
}
