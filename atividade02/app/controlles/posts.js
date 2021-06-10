const Post = require("../models/PostM")
const ViewPost = require("../views/PostV")

// Controller to GET
module.exports.listarPosts = function (req, res) {
    let promise = Post.find().exec();

    promise.then(
        function (posts) {
            res.status(200).json(ViewPost.renderMany(posts))
        }
    ).catch(
        function (error) {
            res.status(500).json({ mensagem: "Não foi possível listar os usuários.", error: error })
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
    let promise = Post.create(req.body)

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