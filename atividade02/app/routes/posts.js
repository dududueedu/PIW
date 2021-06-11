const controller = require("../controlles/posts")

module.exports = function (app) {
    // GET posts
    app.get("/api/posts", controller.listarPosts)

    // GET post por ID
    app.get("/api/posts/:id", controller.listarPostsPorId)

    // POST post
    app.post("/api/posts", controller.inserirPost)

    // DELETE post por ID
    app.delete("/api/posts/:id", controller.excluirPost)

    // GET todos os comentarios do post
    app.get("/api/posts/:id/comentarios", controller.buscarComentarioPostID)
}