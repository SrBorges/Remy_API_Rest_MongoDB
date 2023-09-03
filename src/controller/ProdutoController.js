import express from 'express'
import produto from '../models/produto.js'

export default class ProdutoController{

    static read = async (req, res) => {

        try{
            const produtoListado = await produto.find()
            res.status(200).json(produtoListado)
        }catch(err){
            console.error("Error", err)
            res.status(500).send({error: "Erro na aplicação. "})
        }

    }

    static create = async (req, res) => {

        try{
            const produtoCadastrar = produto(req.body)
            await produtoCadastrar.save()
            res.status(201).json(produtoCadastrar)
        }catch(err){

            console.error("Error", err)
            res.status(500).send({error: "Erro na aplicação"})
        }

    }

    static update = async (req, res) => {

        const id = req.params.id
    
        try{
            const produtoAtualizar = await produto.findByIdAndUpdate(id, req.body, {new: true})

            if(produtoAtualizar){
                res.status(200).send({text: "Produto atualizado. ", produtoAtualizar})
            }else{
                res.status(400).send({error: "Não foi possível atualizar o produto. "})
            }

        }catch(err){
            console.error("Error", err)
            res.status(500).send({error: "Erro na aplicação"})
        }

    }

    static delete = async (req, res) => {

        const id = req.params.id

        try{

            const produtoExcluir = await produto.findByIdAndDelete(id)

            if(produtoExcluir){

                res.status(204).send({text: "Produto excluído"})

            }else{

                res.status(400).send({error: "Não foi possível atualizar o produto "})
            }

        }catch(err){

            console.error("Error", err)
            res.status(500).send({error: "Erro na aplicação"})

        }

    }

}