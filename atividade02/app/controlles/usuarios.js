/*
npm install nodemon -g (start server)
npm install body-parser --save (body->POST)
*/

let usuarios = [
    { id: 1, nome: "Victor", email: "victor.aefarias@gmail.com", senha: "123" },
    { id: 5, nome: "Joao", email: "joao@gmail.com", senha: "456" },
    { id: 10, nome: "Eduardo", email: "eduardosilva@gmail.com", senha: "789" }
]
// Controller to GET-get-nome
module.exports.listarUsuarios = function (req, res) {
    let usuariosReturn = usuarios
    let cont = 0
    if (req.query.nome) {
        let name = req.query.nome
        usuariosReturn = usuariosReturn.filter(function (user) {
            if (user.nome == name) {
                cont++
                return user.nome == name;
            }
        })
        if (cont == 0)
            res.status(404)
    }
    res.json(usuariosReturn)
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
    usuarios.push(usuario)
    res.status(201).json(usuario)
}

// Controller to DELETE-id
module.exports.excluirUsuario = function(req, res){
    let id_ = req.params.id
    usuarios = usuarios.filter(function(user){
        return user.id != id_
    })
    res.json({mensagem: "Usuario excluído."})
}