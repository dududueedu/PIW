const Post = require("../models/PostM")
const ViewPost = require("../views/PostV")
const Comentario = require("../models/ComentarioM")
const ViewComentario = require("../views/ComentarioV")
const jwt = require("jsonwebtoken")

// Controller to GET
module.exports.listarPosts = function (req, res) {
    let promise = Post.find().exec();

    promise.then(
        function (posts) {
            res.status(200).json(ViewPost.renderMany(posts))
        }
    ).catch(
        function (error) {
            res.status(500).json({ mensagem: "Não foi possível listar os Posts.", error: error })
        }
    )
}

// Controller to GET-id
module.exports.listarPostsPorId = function (req, res) {
    let id_ = req.params.id
    let promise = Post.findById(id_).exec()

    promise.then(function (post) {
        res.status(200).json(ViewPost.render(post))
    }
    ).catch(
        function (error) {
            res.status(400).json({ mensagem: "Não encontrado.", error: error })
        }
    )
}

// Controller to POST
module.exports.inserirPost = function(req, res){
    let token = req.headers.token;
    let paypload = jwt.decode(token);
    let id_usuario_logado = paypload.id;

    let promise = Post.create({texto: req.body.texto, likes: req.body.likes, id_usuario: id_usuario_logado})

    promise.then(
        function (post) {
            res.status(201).json(ViewPost.render(post))
        }
    ).catch(
        function (error) {
            res.status(500).json({ msg: "Não foi possível inserir.", error: error })
        }
    )
}

// Controller to DELETE-id
module.exports.excluirPost = function(req, res){
    let id_ = req.params.id
    let promise = Post.findByIdAndDelete(id_)

    promise.then(
        function (post) {
            res.status(200).json(ViewPost.render(post))
        }
    ).catch(
        function (error) {
            res.status(400).json({ mensagem: "Não foi possível remover.", error: error })
        }
    )
}

module.exports.buscarComentarioPostID = function(req, res){
    let idPost = req.params.id
    let promise = Comentario.find({ id_post: idPost }).exec()

    promise.then(
        function (comentarios) {
            res.json(ViewComentario.renderMany(comentarios))
        }
    ).catch(
        function (error) {
            res.status(404).json({ mensagem: "Comentários não encontrados.", error: error })
        }
    )
}