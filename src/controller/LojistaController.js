import lojista from '../models/lojista.js';

export default class LojistaController{

    static read = async (req, res) => {

        try{
            const lojistaListar = await lojista.find()
            res.status(200).json(lojistaListar)

        }catch(err){

            console.error("Error", err)
            res.status(500).send({error: "Erro na aplicação."})

        }

    }

    static create = async (req, res) => {

        try{
            const lojistaCadastrar = lojista(req.body)
            await lojistaCadastrar.save()
            res.status(201).json(lojistaCadastrar)
        }catch(err){

            console.error("Error", err)
            res.status(500).send({error: "Erro na aplicação. "})

        }

    }

    static update = async (req, res) => {

        const id = req.params.id

        try{
            const lojistaAtualizar = await lojista.findByIdAndUpdate(id, req.body, {new: true})

            if(lojistaAtualizar){

                res.status(200).send({text: "Sucesso ao atualizar. ", lojistaAtualizar})

            }else{
                res.status(400).send({error: "Erro ao atualizar. "})
            }
        }catch(err){
            console.error("Error", err)
            res.status(500).send({error: "Erro na aplicação."})
        }
    }

    static delete = async (req, res) => {

        const id = req.params.id

        try{
            const lojistaExcluir = await lojista.findByIdAndRemove(id)

            if(lojistaExcluir){
                res.status(204).send({text: "Sucesso ao excluir. "})
            }else{
                res.status(400).send({error: "Erro ao excluir. "})
            }

        }catch(err){

            res.status(500).send({error: "Erro na aplicação."})

        }

    }


    

}