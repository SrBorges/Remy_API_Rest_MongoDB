import LojistaController from "../controller/LojistaController.js";
import express from 'express';

const router = express.Router()

router
.get("/lojista", LojistaController.read)
.post("/lojista", LojistaController.create)
.put("/lojista/:id", LojistaController.update)
.delete("/lojista/:id", LojistaController.delete)


export default router;
