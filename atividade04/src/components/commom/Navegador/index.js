import logo from '../../assets/logo.png'
import './index.css'

function Navegador() {
    return (
        <nav className="naveg">
            <img className="my-logo" src={logo}/>
            <h3>Linha do Tempo</h3>
            <h3>Postar</h3>
            <h3>Victor</h3>
        </nav>
    )
}
export default Navegador