import './index.css'
import { useState } from 'react'

function Post({ nome, msg, qtd_likes }) {

    const [qtd_li, setQTD_likes] = useState(qtd_likes)
    console.log(qtd_li)

    function addLikes(){
        setQTD_likes(qtd_li + 1)
    }

    return (
        <div className="post">
            <h3 className="nomeUsuario">{nome}</h3>
            <span className="mensagem">"{msg}"</span>
            <div className="likeEbotao">
                <span className="qtdLikes">{qtd_li} likes</span>
                <button onClick={addLikes} className="botaoDoPost">Curtir</button>
            </div>
        </div>
    )
}

export default Post