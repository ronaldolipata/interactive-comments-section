import * as jose from 'jose'
import { User } from '../models/users'

import { createSecretKey } from 'crypto'

const secretKey = createSecretKey(process.env.JWT_SECRET, 'utf-8')

export async function createAccessToken(id: string) {
  const alg = 'HS256'
  const token = await new jose.SignJWT({ 'usr_id': id })
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setSubject('accessToken')
    .setExpirationTime('5m')
    .sign(secretKey)
  return token
}
