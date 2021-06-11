const Comentario = require("../models/ComentarioM")
const ViewComentario = require("../views/ComentarioV")

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
    let promise = Comentario.create(req.body)

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