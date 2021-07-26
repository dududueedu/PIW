import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './index.css'

function Navegador() {
    return (
        <nav className="naveg">
            <img className="my-logo" alt="minha-logo" src={logo} />
            <div className="nav-direita">
                <NavLink exact className="botoes" to="/"> Linha do Tempo </NavLink>
                <NavLink className="botoes" to="/pagpostar"> Postar </NavLink>
                <span className="pessoa-logada">Victor</span>
            </div>
        </nav>
    )
}
export default Navegador