import Navegador from "../../commom/Navegador"
import LinhaDoTempo from '../../pages/LinhaDoTempo'
import Post from '../../pages/Post'
import './index.css'

function PaginaFeed() {
    return (
        <div className="container">
            <Navegador />
            <LinhaDoTempo />
            <Post />
        </div>
    )
}

export default PaginaFeed