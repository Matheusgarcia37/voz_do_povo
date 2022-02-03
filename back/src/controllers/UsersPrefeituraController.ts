import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { UserPrefeitura } from '../database/models/UserPrefeitura'

class UsersPrefeituraController {
  public async store (req: Request, res: Response) {
    try {
      const repo = getRepository(UserPrefeitura)
      const { login } = req.body

      const userExist = await repo.findOne({ where: { login } })

      if (userExist) {
        return res.status(409).json({ message: 'Erro! já existe um usuário cadastrado com esse login.' })
      }

      const user = repo.create(req.body)
      const response = await repo.save(user)

      return res.status(200).json(response)
    } catch (error) {
      console.log(error.message)
      return res.status(400).json({ message: 'Houve um erro ao tentar enviar sua mensagem' })
    }
  }
}

export default new UsersPrefeituraController()
