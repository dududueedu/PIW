import Post from '../Post'
import './index.css'


let infoPosts = [{
        id: 1,
        nomeUsuario: "Nicolau",
        texto: "Menino, tá quente demais hoje",
        qtdLikes: 7
    }]

function LinhaDoTempo() {
    return (
        <div className="linha-do-tempo">
            {infoPosts.map((post) =>{
                return (
                    <Post key={post.id} nome = {post.nomeUsuario} msg = {post.texto} qtd_likes = {post.qtdLikes}></Post>
                )
            })}
        </div>
    )
}
export default LinhaDoTempo