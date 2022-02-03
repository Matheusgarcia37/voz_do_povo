import { Router } from 'express'
import DenunciasController from '../controllers/DenunciasController'
import multer from 'multer'
import authMiddleware from '../middlewares/authmiddleware'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './src/uploads')
  },
  filename: function (req, file, cb) {
    // Extração da extensão do arquivo original:
    const extensaoArquivo = file.originalname.split('.')[1]

    // Cria um código randômico que será o nome do arquivo
    const novoNomeArquivo = require('crypto')
      .randomBytes(64)
      .toString('hex')

    // Indica o novo nome do arquivo:
    cb(null, `${novoNomeArquivo}.${extensaoArquivo}`)
  }
})

const upload = multer({ storage })

const DenunciasRouter = Router()

DenunciasRouter.post('/', upload.array('file'), DenunciasController.store)
DenunciasRouter.get('/', authMiddleware, DenunciasController.index)
DenunciasRouter.delete('/', authMiddleware, DenunciasController.delete)
DenunciasRouter.post('/findByToken', DenunciasController.findByToken)

export default DenunciasRouter
