import logo from '../../assets/logo.png'
import './index.css'

function Navegador() {
    return (
        <nav className="naveg">
            <img className="my-logo" alt="minha-logo" src={logo} />
            <div className="nav-direita">
                <a className="botaoLT" href="/"> <p>Linha do Tempo</p> </a>
                <a className="botaoPostar" href="/"> <p>Postar</p> </a>
                <p className="pessoa-logada">Victor</p>
            </div>
        </nav>
    )
}
export default Navegador