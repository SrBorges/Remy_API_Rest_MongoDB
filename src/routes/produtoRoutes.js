import express from 'express';
import ProdutoController from '../controller/ProdutoController.js';

const router = express.Router()

router
.get('/produtos', ProdutoController.read)
.post('/produtos', ProdutoController.create)
.put('/produtos/:id', ProdutoController.update)
.delete('/produtos/:id', ProdutoController.delete)



export default router