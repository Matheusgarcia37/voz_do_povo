import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { ComentariosDeDenuncia } from '../database/models/ComentariosDeDenuncia'

class ComentariosDenunciasController {
  public async store (req: Request, res: Response) {
    try {
      const repo = getRepository(ComentariosDeDenuncia)
      const reponse = await repo.save(req.body)
      return res.status(200).json(reponse)
    } catch (error) {
      console.log(error.message)
      return res.status(400).json({ message: 'Houve um erro ao tentar enviar sua mensagem' })
    }
  }

  public async index (req: Request, res: Response) {
    try {
      console.log('a')
    } catch (error) {
      console.log(error.message)
      return res.status(400).json({ message: 'Houve um erro ao tentar buscar as mensagens' })
    }
  }
}

export default new ComentariosDenunciasController()
