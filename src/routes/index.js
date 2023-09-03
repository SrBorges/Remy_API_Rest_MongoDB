import express from 'express';
import lojista from './lojistaRoutes.js';
import fornecedor from './fornecedorRoutes.js';
import produto from "./produtoRoutes.js";

const router = (app) => {

    app.route('/').get((req, res) => {

        res.status(200).send({text: "Verifique os EndPoints... "})

    })

    app.use(
        express.json(),
        lojista,
        fornecedor,
        produto
    )

}

export default router;