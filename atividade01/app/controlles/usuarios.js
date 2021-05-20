let usuarios = [
    {id: 1, nome: "Victor", email: "victor.aefarias@gmail.com", senha: "123"},
    {id: 5, nome: "João", email: "joao@gmail.com", senha: "456"},
    {id: 10, nome: "Eduardo", email: "eduardosilva@gmail.com", senha: "789"}
]

module.exports.listarUsuarios = function(req, res){
    res.json(usuarios)
}

module.exports.listarUsuariosPorId = function(req, res){
    let id_usuario = req.params.id
    let usuario = usuarios.find(function(usuario){
        return usuario.id == id_usuario
    })
    res.json(usuario)
}