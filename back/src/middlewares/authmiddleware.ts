import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

type TokenPayLoad = {
    id: string;
    cidadeId: string;
    nome: string;
    iat: number;
    exp: number;
}

export default function authMiddleware (req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers

  if (!authorization) {
    return res.sendStatus(401)
  }

  const token = authorization.replace('Bearer', '').trim()

  try {
    const data = jwt.verify(token, process.env.KEY_HASH)
    const { id, cidadeId, nome } = data as TokenPayLoad

    req.userId = id
    req.cidadeId = cidadeId
    req.nome = nome

    return next()
  } catch {
    return res.sendStatus(401)
  }
}
