import './index.css'
import { useState } from 'react'
import { Form, Input } from 'antd'

function Post({ nome, msg, qtd_likes }) {

    const [qtd_li, setQTD_likes] = useState(qtd_likes)
    console.log(qtd_li)

    function addLikes() {
        setQTD_likes(qtd_li + 1)
    }

    return (
        <div className="post-comment">
            <div className="post">
                <h3 className="nomeUsuario">{nome}</h3>
                <span className="mensagem">"{msg}"</span>
                <div className="likeEbotao">
                    <span className="qtdLikes">{qtd_li} likes</span>
                    <button onClick={addLikes} className="botaoDoPost">Curtir</button>
                </div>
            </div>
            <div className="area-comment">
                <div className="comment">
                    <span className="nome-post">Robson</span>
                    <span className="comment-post">"Num é que tá?"</span>
                </div>
                <div className="comment">
                    <span className="nome-post">Luana</span>
                    <span className="comment-post">"Armaria! nem me diga"</span>
                </div>
            </div>

            <Form className="formularioComment">
                <Form.Item name="username"
                    rules={[{
                        required: true,
                        message: 'Por favor, escreva sua mensagem.',
                    }]}>
                    <Input placeholder="escreva sua mensagem" />
                </Form.Item>
            </Form>

        </div>
    )
}

export default Post