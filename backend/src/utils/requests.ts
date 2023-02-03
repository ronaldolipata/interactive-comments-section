import { Request } from "express"

type IncomingRequest<T> = Omit<Request, "body"> & {
  body: T
}

export default IncomingRequest
