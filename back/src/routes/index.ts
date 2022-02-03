import { Router } from 'express'
import cidadesRouter from './cidades.routes'
import ComentariosDenunciasRouter from './comentariosDenuncias.routes'
import DenunciasRouter from './denuncias.routes'
import UsersPrefeituraRouter from './usersPrefeitura.routes'

const routes = Router()

routes.use('/users', UsersPrefeituraRouter)
routes.use('/cidades', cidadesRouter)
routes.use('/denuncias', DenunciasRouter)
routes.use('/comentarios', ComentariosDenunciasRouter)
export default routes
