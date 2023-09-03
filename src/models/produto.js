import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema({

    id: {type: String},
    tipo: {type: String, required: true},
    dataDeEntrada: {type: String, required: true},
    dataDeValidade: {type: String, required: true},
    temperatura: {type: String, required: true},
    localArmazenado: {type: String, required: true},

})

const produto = mongoose.model("produto", produtoSchema)


export default produto