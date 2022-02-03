import { Router } from 'express'
import CidadesController from '../controllers/CidadesController'

const cidadesRouter = Router()

cidadesRouter.get('/', CidadesController.index)
cidadesRouter.post('/', CidadesController.store)

export default cidadesRouter
