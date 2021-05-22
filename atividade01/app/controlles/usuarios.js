/*
npm install nodemon -g
*/

let usuarios = [
    {id: 1, nome: "Victor", email: "victor.aefarias@gmail.com", senha: "123"},
    {id: 5, nome: "Joao", email: "joao@gmail.com", senha: "456"},
    {id: 10, nome: "Eduardo", email: "eduardosilva@gmail.com", senha: "789"}
]

module.exports.listarUsuarios = function(req, res){
    let usuariosReturn = usuarios

    if(req.query.nome) {
        let name = req.query.nome
        usuariosReturn = usuariosReturn.filter(function(user){
            return user.nome == name;
        })
    }
    res.json(usuariosReturn)
}

module.exports.listarUsuariosPorId = function(req, res){
    let id_ = req.params.id
    let usuario = usuarios.find(function(user){
        return user.id == id_
    })

    if(usuario) 
        res.json(usuario)
    else 
        res.status(404).json({mensagem: "Usuario nao encontrado"})
}