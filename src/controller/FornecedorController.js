import fornecedor from "../models/fornecedor.js";

export default class FornecedorController{

    static read = async (req, res) => {

        try{
            const fornecedorListar = await fornecedor.find()

            res.status(200).json(fornecedorListar)
        }catch(err){

            console.error("Error", err)
            res.status(500).send({error: "Erro na aplicação. "})

        }

    }

    static create = async (req, res) => {

        try{
            const fornecedorCadastrar = fornecedor(req.body)
            await fornecedorCadastrar.save()
            res.status(201).json(fornecedorCadastrar)

        }catch(err){

            console.error("Error", err)
            res.status(500).send({error: "Erro na aplicação. "})
        }

    }

    static update = async (req, res) => {

        const id = req.params.id

        try{

            const fornecedorAtualizar = await fornecedor.findByIdAndUpdate(id, req.body, {new: true})

            if(fornecedorAtualizar){
                res.status(200).send({text: "Cadastro atualizado. ", fornecedorAtualizar})
            }else{
                res.status(400).send({error: "Erro ao atualizar o cadastro."})
            }

        }catch(err){
            console.error("Error", err)
            res.status(500).send({error: "Erro na aplicação"})
        }

    }

    static delete = async (req, res) => {

        const id = req.params.id

        try{
            const fornecedorExcluir = await fornecedor.findByIdAndRemove(id)

            if(fornecedorExcluir){
                res.status(204).send({text: "Cadastro excluído. "})

            }else{
                res.status(400).send({error: "Não foi possível realizar a exclusão. "})
            }
        }catch(err){
            console.error("Error", err)
            res.status(500).send({error: "Erro na aplicação"})
        }

    }


}