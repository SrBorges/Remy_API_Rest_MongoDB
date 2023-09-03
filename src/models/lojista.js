import mongoose from "mongoose";

const lojistaSchema = new mongoose.Schema({

    id: {type: String},
    nome: {type: String, required: true},
    email: {type: String, required: true},
    cpf: {type: String, required: true},
    dataDeNascimento: {type: String, required: true},
    rua: {type: String, required: true},
    numero: {type: Number},
    bairro: {type: String, required: true},
    cidade: {type: String, required: true},
    estado: {type: String, required: true},
    cep: {type: String, required: true},

})


const lojista = mongoose.model("lojista", lojistaSchema)


export default lojista