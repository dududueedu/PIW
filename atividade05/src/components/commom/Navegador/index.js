import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './index.css'

function Navegador() {
    return (
        <nav className="naveg">
            <img className="my-logo" alt="minha-logo" src={logo} />
            <div className="nav-direita">
                <NavLink exact className="botoes" to="/"> <p>Linha do Tempo</p> </NavLink>
                <NavLink className="botoes" to="/pagpostar"> <p>Postar</p> </NavLink>
                <p className="pessoa-logada">Victor</p>
            </div>
        </nav>
    )
}
export default Navegador