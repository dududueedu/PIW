/*rodar server ->>>> .\mongod.exe --dbpath=./datadir
rodar cliente ->>> .\mongo.exe*/
const Usuario = require("../models/UsuarioM")
const Post = require("../models/PostM")
const ViewPost = require("../views/PostV")
const View = require("../views/UsuarioV") 
//senhas hasheadas
const bcrypt = require("bcrypt")

module.exports.listarUsuarios = function (req, res) {
    let promise = Usuario.find().exec()
    promise.then(
        function (usuarios) {
            res.status(200).json(View.renderMany(usuarios))
        }
    ).catch(
        function (error) {
            res.status(500).json({ mensagem: "Não foi possível listar os usuários.", error: error })
        }
    )
}

module.exports.listarUsuariosPorId = function (req, res) {
    let id_ = req.params.id
    let promise = Usuario.findById(id_).exec()

    promise.then(
        function (usuario) {
            res.json(View.render(usuario))
        }
    ).catch(
        function (error) {
            res.status(404).json({ mensagem: "Usuário não encontrado.", error: error })
        }
    )
}

// Controller to POST
module.exports.inserirUsuario = function(req, res){
    //let usuario = req.body
    
    let usuario = {
        nome: req.body.nome,
        email: req.body.email,
        senha: bcrypt.hashSync(req.body.senha, 10)
    }
    let promisse = Usuario.create(usuario)

    promisse.then(function (usuario){
        res.status(201).json( View.render(usuario) )
    }).catch(function (error){
        res.status(400).json({ mensagem: "Sua requisição falhou!", error: error })
    })
}

// Controller to DELETE-id
module.exports.excluirUsuario = function(req, res){
    let id_ = req.params.id
    let promise = Usuario.findByIdAndDelete(id_)

    promise.then(
        function (usuario) {
            res.status(200).json(View.render(usuario))
        }
    ).catch(
        function (error) {
            res.status(400).json({ mensagem: "Não foi possível remover usuário.", error: error })
        }
    )
}

module.exports.buscarPostsUsuarioPorID = function(req, res){
    let id_usuario = req.params.id
    let promise = Post.find({ id_usuario: id_usuario })

    promise.then(
        function (posts) {
            res.json(ViewPost.renderMany(posts))
        }
    ).catch(
        function (error) {
            res.status(404).json({ mensagem: "Posts não encontrados.", error: error })
        }
    )
}