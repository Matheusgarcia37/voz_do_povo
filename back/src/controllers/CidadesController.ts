import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Cidade } from '../database/models/Cidade'

class CidadesController {
  public async store (req: Request, res: Response) {
    try {
      const repo = getRepository(Cidade)
      const response = await repo.save(req.body)
      return res.status(201).json(response)
    } catch (error) {
      console.log(error.message)
      return res.status(400).json({ message: 'Houve um erro ao tentar criar uma cidade' })
    }
  }

  public async index (req: Request, res: Response) {
    try {
      const repo = getRepository(Cidade)
      const response = await repo.find()
      return res.status(201).json(response)
    } catch (error) {
      console.log(error.message)
      return res.status(400).json({ message: 'Houve um erro ao tentar buscar as cidades cadastradas' })
    }
  }
}

export default new CidadesController()
