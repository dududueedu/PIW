const mongoose = require('mongoose')
const Usuario = require('./UsuarioM')
const Post = require('./PostM')

module.exports = function(){
    let schema = mongoose.Schema({
        texto: {
            type: "String",
            required: true
        },

        id_post:{
            type: mongoose.Schema.ObjectId,
            ref: Post // "Post"
        },

        id_usuario:{
            type: mongoose.Schema.ObjectId,
            ref: Usuario // "Usuario"
        }
    })
    return mongoose.model('Comentario', schema)
}()