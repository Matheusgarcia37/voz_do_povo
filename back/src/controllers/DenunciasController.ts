import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Arquivo } from '../database/models/Arquivo'
import { Denuncia } from '../database/models/Denuncia'
import { RegistroDeCidadao } from '../database/models/RegistroDeCidadao'

class DenunciasController {
  public async store (req: Request, res: Response) {
    const body = JSON.parse(JSON.stringify(req.body))
    try {
      const repo = getRepository(Denuncia)

      let cidadao: any, denuncia: any
      if (body.cidadao) {
        if (typeof body.cidadao === 'string' && typeof body.denuncia === 'string') {
          cidadao = JSON.parse(JSON.parse(JSON.stringify(body.cidadao)))
          denuncia = JSON.parse(JSON.parse(JSON.stringify(body.denuncia)))
        } else {
          cidadao = body.cidadao
          denuncia = body.denuncia
        }
      } else {
        if (typeof body.denuncia === 'string') {
          denuncia = JSON.parse(JSON.parse(JSON.stringify(body.denuncia)))
        } else {
          denuncia = body.denuncia
        }
      }

      // Se existe um cidadaos
      if (cidadao) {
        const repoCidadao = getRepository(RegistroDeCidadao)
        const existCidadao = await repoCidadao.findOne({ where: { email: cidadao.email } })
        if (existCidadao) {
          await repoCidadao.update({ id: existCidadao.id }, cidadao)
          denuncia.cidadaoId = existCidadao.id
        } else {
          const responseOfCidadao = await repoCidadao.save(cidadao)
          denuncia.cidadaoId = responseOfCidadao.id
        }
      }

      // generateToken
      let auxToken = 0
      while (auxToken === 0) {
        const token = Math.random().toString(36).substr(2)
        const tokenExist = await repo.findOne({ where: { token } })
        if (!tokenExist) {
          auxToken++
          denuncia.token = token
        }
      }

      denuncia.cidadeId = 'f779c237-68df-4ad1-93dc-e35f13074a9b'// cidade id

      const response = await repo.save(denuncia)

      // lidando com arquivos
      if (req.files) {
        const tamanho = req.files.length
        const repoArquivos = getRepository(Arquivo)
        for (let i = 0; i < tamanho; i++) {
          const arquivo = {
            denunciaId: response.id,
            url: req.files[i].path
          }

          await repoArquivos.save(arquivo)
        }
      }
      return res.status(201).send(response)
    } catch (error) {
      console.log(error.message)
      return res.status(400).json({ message: 'Houve um erro ao tentar criar uma denuncia' })
    }
  }

  public async index (req: Request, res: Response) {
    try {
      const repo = getRepository(Denuncia)
      /* const response = await repo.find({ relations: ['registroDeCidadao', 'cidade', 'comentariosDeDenuncias', 'arquivos'] }) */
      const response = await repo.find({ relations: ['registroDeCidadao', 'cidade', 'arquivos'] })
      return res.status(201).json(response)
    } catch (error) {
      console.log(error.message)
      return res.status(400).json({ message: 'Houve um erro ao tentar buscar as denuncias cadastradas' })
    }
  }

  public async delete (req: Request, res: Response) {
    try {
      const { id } = req.body
      const repo = getRepository(Denuncia)
      await repo.softDelete(id)
      return res.status(201).json({ message: 'A denuncia foi deletada com sucesso!' })
    } catch (error) {
      console.log(error.message)
      return res.status(400).json({ message: 'Ocorreu um erro em tentar deletar a denuncia' })
    }
  }

  public async findByToken (req: Request, res: Response) {
    try {
      const { token } = req.body
      const repo = getRepository(Denuncia)
      const denuncia = await repo.findOne({ where: { token }, relations: ['registroDeCidadao', 'cidade', 'comentariosDeDenuncias', 'arquivos'] })
      denuncia.comentariosDeDenuncias.sort((a, b) => {
        const newA = a.createdAt as any
        const newB = b.createdAt as any
        return newA - newB
      })
      return res.status(200).json(denuncia)
    } catch (error) {
      console.log(error.message)
      return res.status(400).json({ error: 'Não foi possivel buscar a sua denúncia, por favor verifique seu token e tente novamente' })
    }
  }
}

export default new DenunciasController()
