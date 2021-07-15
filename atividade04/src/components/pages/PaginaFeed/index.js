import Navegador from "../../commom/Navegador"
import LinhaDoTempo from '../../pages/LinhaDoTempo'
import './index.css'

function PaginaFeed() {
    return (
        <div className="container">
            <Navegador />
            <LinhaDoTempo />
        </div>
    )
}

export default PaginaFeed