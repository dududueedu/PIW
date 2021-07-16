import './index.css'

function Post({nome, msg, qtdLikes}) {
    return (
        <div className="post">
            <h3 className="nomePessoa">nome da pessoa</h3>
            <span className="mensagem">mensagem que a pessoa postou</span>
            <span className="qtdLikes">quantidade de likes</span>
        </div>
    )
}

export default Post