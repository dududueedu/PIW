import Post from '../Post'
import './index.css'


let infoPosts = [
    {
        id: 1,
        nomeUsuario: "Karine",
        texto: "Menino, tá quente demais hoje",
        qtdLikes: 7
    },
    {
        id: 2,
        nomeUsuario: "Nicolau",
        texto: "Num aguento mais essa quintura",
        qtdLikes: 3
    }, 
    {
        id: 3,
        nomeUsuario: "Tribos",
        texto: "Sigam a TribosMusicArt no Instagram",
        qtdLikes: 3
    }]

function LinhaDoTempo() {
    return (
        <div className="linha-do-tempo">
            {infoPosts.map((post) =>{
                return (
                    <Post nome = {post.nomeUsuario} msg = {post.texto} qtd_likes = {post.qtdLikes}></Post>
                )
            })}
        </div>
    )
}
export default LinhaDoTempo