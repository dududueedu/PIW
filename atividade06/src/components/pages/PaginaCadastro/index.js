import { Form, Input, Button } from 'antd';
import history from '../../History'
import './index.css'

function PaginaCadastro() {

    function BackFeed() {
        history.push("/")
    }

    return (
        <div className="containerForm">
            <div className="formCadastro">
                <span className="title">Cadastrar Usuário</span>
                <Form className="formularioCadastro">
                    <Form.Item label="Nome:" name="nome">
                        <Input placeholder="escreva seu nome" />
                    </Form.Item>

                    <Form.Item label="E-mail:" name="email">
                        <Input placeholder="escreva seu email" />
                    </Form.Item>

                    <Form.Item label="Senha:" name="senha">
                        <Input placeholder="escreva sua senha" />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{ offset: -1, span: 16 }}>

                        <Button type="primary" htmlType="submit" onClick={BackFeed}>
                            Submeter
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default PaginaCadastro