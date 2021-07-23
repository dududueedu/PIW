import Navegador from '../../commom/Navegador'
import './index.css'

function PaginaPostar() {
    return (
        <div className="container">
            <Navegador />
            <div>
                <h3>componente FormPostar</h3>
                <p>a. Deve conter um campo para digitar a mensagem</p>
                <span>
                    b.
                    Deve conter o botão de
                    submeter.
                    Ao clicar nesse botão,</span><p>
                    deve redirecionar
                    para PaginaFeed. Não precisa
                    implementar a <p>parte de adicionar comentário nesse
                    momento.</p>
                </p>
            </div>
        </div>
    )
}

export default PaginaPostar