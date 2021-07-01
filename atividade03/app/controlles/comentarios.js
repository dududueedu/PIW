const Comentario = require("../models/ComentarioM")
const ViewComentario = require("../views/ComentarioV")
const jwt = require("jsonwebtoken")

// Controller to GET
module.exports.listarComentarios = function (req, res) {
    let promise = Comentario.find().exec();

    promise.then(
        function (comentarios) {
            res.status(200).json(ViewComentario.renderMany(comentarios))
        }
    ).catch(
        function (error) {
            res.status(500).json({ mensagem: "Não foi possível listar os Comentarios.", error: error })
        }
    )
}

// Controller to GET-id
module.exports.listarComentariosPorId = function (req, res) {
    let id_ = req.params.id
    let promise = Comentario.findById(id_).exec()

    promise.then(function (comentario) {
        res.status(200).json(ViewComentario.render(comentario))
    }
    ).catch(
        function (error) {
            res.status(400).json({ mensagem: "Não encontrado.", error: error })
        }
    )
}

// Controller to POST
module.exports.inserirComentarios = function(req, res){
    let token = req.headers.token;
    let paypload = jwt.decode(token);
    let id_usuario_logado = paypload.id;
    
    let promise = Comentario.create({texto: req.body.texto, id_post: req.body.id_post, id_usuario: id_usuario_logado})

    promise.then(
        function (comentario) {
            res.status(201).json(ViewComentario.render(comentario))
        }
    ).catch(
        function (error) {
            res.status(500).json({ msg: "Não foi possível inserir.", error: error })
        }
    )
}

// Controller to DELETE-id
module.exports.excluirComentarios = function(req, res){
    let id_ = req.params.id
    let promise = Comentario.findByIdAndDelete(id_)

    promise.then(
        function (comentario) {
            res.status(200).json(ViewComentario.render(comentario))
        }
    ).catch(
        function (error) {
            res.status(400).json({ mensagem: "Não foi possível remover.", error: error })
        }
    )
}