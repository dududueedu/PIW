/*rodar server ->>>> .\mongod.exe --dbpath=./datadir
rodar cliente ->>> .\mongo.exe*/
const Usuario = require("../models/UsuarioM")

let usuarios = [
    { id: 1, nome: "Victor", email: "victor.aefarias@gmail.com", senha: "123" },
    { id: 5, nome: "Joao", email: "joao@gmail.com", senha: "456" },
    { id: 10, nome: "Eduardo", email: "eduardosilva@gmail.com", senha: "789" }
]
// Controller to GET-get-nome
module.exports.listarUsuarios = function (req, res) {
    let promise = Usuario.find().exec()
    promise.then(
        function (usuarios) {
            res.status(200).json(usuarios)
        }
    ).catch(
        function (error) {
            res.status(500).json({ mensagem: "Não foi possível listar os usuários." })
        }
    )
}

// Controller to GET-id
module.exports.listarUsuariosPorId = function (req, res) {
    let id_ = req.params.id
    let usuario = usuarios.find(function (user) {
        return user.id == id_
    })

    if (usuario)
        res.json(usuario)
    else
        res.status(404).json({ mensagem: "Usuario nao encontrado" })
}

// Controller to POST
module.exports.inserirUsuario = function(req, res){
    let usuario = req.body
    let promisse = Usuario.create(usuario)

    promisse.then(function (usuario){
        res.status(201).json(usuario)
    }).catch(function (error){
        res.status(400).json({mensagem: "sua requisição falhou!"})
    })
}

// Controller to DELETE-id
module.exports.excluirUsuario = function(req, res){
    let id_ = req.params.id
    usuarios = usuarios.filter(function(user){
        return user.id != id_
    })
    res.json({mensagem: "Usuario excluído."})
}