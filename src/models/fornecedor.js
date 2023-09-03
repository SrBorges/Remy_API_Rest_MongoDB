import mongoose from "mongoose";

const fornecedorSchema = new mongoose.Schema({

    id: {type: String},
    nome: {type: String, required: true},
    email: {type: String, required: true},
    cnpj: {type: String, required: true},
    razaoSocial: {type: String, required: true},
    rua: {type: String, required: true},
    numero: {type: Number},
    bairro: {type: String, required: true},
    cidade: {type: String, required: true},
    estado: {type: String, required: true},
    cep: {type: String, required: true},

})

const fornecedor = mongoose.model("fornecedor", fornecedorSchema)

export default fornecedor