import { Request, Response } from "express"
import { Prisma, PrismaClient, User } from "@prisma/client"

const prisma = new PrismaClient()

// adds a type for user body based on the provided type
export interface IncomingUserRequest<T> extends Omit<Request, "body"> {
  body: T
}

// simply takes the username property on user type.
export interface CreatePayload extends Pick<User, "username"> {}

export async function create(
  req: IncomingUserRequest<CreatePayload>,
  res: Response
) {
  const { username } = req.body

  try {
    // create the user based on the sent request
    const user = await prisma.user.create({ data: { username } })
    // return the newly created user
    return res.status(201).json(user)
  } catch (error) {
    // if error is instance of prisma error then console log the error message
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // if the error code is P2002 it means violation of unique constraint.
      if (error.code === "P2002") {
        // return bad request status.
        return res
          .status(400)
          .json({ username: `${username} is already taken` })
      }
      // add logger here to store error messages
      console.log("ECODE:", error.code, "EMSG:", error.message)
    }
    // return to resolved the promise.
    return res.status(500).end()
  }
}
