import { Router } from 'express'
import ComentariosDenunciasController from '../controllers/ComentariosDenunciasController'

const ComentariosDenunciasRouter = Router()

ComentariosDenunciasRouter.get('/', ComentariosDenunciasController.index)
ComentariosDenunciasRouter.post('/', ComentariosDenunciasController.store)

export default ComentariosDenunciasRouter
