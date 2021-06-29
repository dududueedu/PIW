const Usuario = require("../models/UsuarioM")
const bcrypt = require("Bcrypt")

module.exports.logar = function (req, res){
    Usuario.findOne({email: req.body.email})
        .then(function (user){
            if(bcrypt.compareSync(req.body.senha, user.senha)){
                res.status(200).send("credenciais ok!")
            }
            res.status(401).send("credenciais inválidas!")
        })
        .catch(function (){
            res.status(401).send("credenciais erradas!")
        })
}