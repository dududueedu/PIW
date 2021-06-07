const mongoose = require('mongoose')
const Usuario = require('./UsuarioM')

module.exports = function() {
    let schema = mongoose.Schema({
        texto: {
            type: "String",
            required: true
        },

        likes:{
            type: "Number",
            required: true
        },

        id_usuario:{
            type: mongoose.Schema.ObjectId,
            ref: Usuario // "Usuario"
        }
    })
    return mongoose.model('Post', schema)
}() //para que o retorno da funcao seja exportada