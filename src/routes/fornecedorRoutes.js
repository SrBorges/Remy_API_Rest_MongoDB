import express from 'express'
import FornecedorController from '../controller/FornecedorController.js'

const router = express.Router()

router
.get('/fornecedor', FornecedorController.read)
.post('/fornecedor', FornecedorController.create)
.put('/fornecedor/:id', FornecedorController.update)
.delete('/fornecedor/:id', FornecedorController.delete)


export default router