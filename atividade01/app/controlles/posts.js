let posts = [
    { id: 1, texto: "Oi, tudo bem?", likes: 6 },
    { id: 5, texto: "Tudo bom! E vc?", likes: 8 },
    { id: 10, texto: "Belezuras!", likes: 7 }
]
// Controller to GET
module.exports.listarPosts = function (req, res) {
    res.json(posts)
}

// Controller to GET-id
module.exports.listarPostsPorId = function (req, res) {
    let id_ = req.params.id
    let VerPost = posts.find(function (post) {
        return post.id == id_
    })

    if (VerPost)
        res.json(VerPost)
    else
        res.status(404).json({ mensagem: "Usuario nao encontrado" })
}

// Controller to POST
module.exports.inserirPost = function(req, res){
    let post = req.body
    posts.push(post)
    res.status(201).json(post)
}

// Controller to DELETE-id
module.exports.excluirPost = function(req, res){
    let id_ = req.params.id
    posts = posts.filter(function(post){
        return post.id != id_
    })
    res.json({mensagem: "Usuario excluído."})
}