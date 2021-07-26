import Navegador from '../../commom/Navegador'
import FormPostar from '../FormPostar'
import './index.css'

function PaginaPostar() {
    return (
        <div className="container">
            <Navegador />
            <FormPostar />
        </div>
    )
}

export default PaginaPostar