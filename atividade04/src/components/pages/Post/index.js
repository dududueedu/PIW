import './index.css'

function Post({nome, msg, qtd_likes}) {
    return (
        <div className="post">
            <h3 className="nomePessoa">{nome}</h3>
            <span className="mensagem">{msg}</span>
            <span className="qtdLikes">{qtd_likes}</span>
        </div>
    )
}

export default Post