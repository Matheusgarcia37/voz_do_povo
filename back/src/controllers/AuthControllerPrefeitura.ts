import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { UserPrefeitura } from '../database/models/UserPrefeitura'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

class AuthControllerPrefeitura {
  public async authenticate (req: Request, res: Response) {
    try {
      const repo = getRepository(UserPrefeitura)
      const { login, senha } = req.body

      const user = await repo.findOne({ where: { login } })

      if (!user) {
        return res.status(401).json({ message: 'Usuario ou senha incorretos' })
      }

      const isValidPassword = await bcrypt.compare(senha, user.senha)

      if (!isValidPassword) {
        return res.status(401).json({ message: 'Usuario ou senha incorretos' })
      }
  
      const token = jwt.sign({ id: user.id, cidadeId: user.cidadeId, nome: user.nome }, process.env.KEY_HASH, { expiresIn: '1d' })
      delete user.senha
      return res.json({ user, token })
    } catch (error) {
      console.log(error.message)
      return res.status(400).json({ message: 'Houve um erro ao tentar enviar sua mensagem' })
    }
  }
}

export default new AuthControllerPrefeitura()
