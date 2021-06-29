const Usuario = require("../models/UsuarioM")
const bcrypt = require("Bcrypt")
const jwt = require("jsonwebtoken")

module.exports.logar = function (req, res) {
    Usuario.findOne({ email: req.body.email })
        .then(function (user) {
            if (bcrypt.compareSync(req.body.senha, user.senha)) {
                let token = jwt.sign({ id: user.id }, "senhaSecreta")
                res.status(200).json({ token: token })
            }
            res.status(401).send("credenciais inválidas!")
        })
        .catch(function () {
            res.status(401).send("credenciais erradas!")
        })
}