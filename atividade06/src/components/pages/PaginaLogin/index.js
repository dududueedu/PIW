import { Form, Input, Button } from 'antd';
import history from '../../History'
import './index.css'

function PaginaLogin(){
    
    function BackFeed() {
        history.push("/")
    }

    return(
        <div className="containerForm">
            <div className="formLogin">
                <span className="title">Login</span>
                <Form className="formularioLogin">
                    <Form.Item label="" name="email">
                        E-mail:<Input placeholder="escreva seu email" />
                    </Form.Item>

                    <Form.Item label="" name="senha">
                        Senha:<Input.Password placeholder="escreva sua senha" />
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

export default PaginaLogin