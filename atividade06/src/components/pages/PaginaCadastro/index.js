import { Form, Input, Button } from 'antd';
import axios from 'axios';
import { useForm } from 'react-hook-form'
import history from '../../History'
import './index.css'

function PaginaCadastro() {

    function BackFeed() {
        history.push("/")
    }

    const {register, handleSubmit} = useForm();
    const submeterForm = (usuario) =>{
        console.log("teste")
        axios({
            method: "POST",
            url: "http://localhost:8899/api/usuarios", 
            data: usuario
        }).then((response)=>{
            console.log(response)
        }).catch((error)=>{
            console.log(error)
        })
    }

    return (
        <div className="containerForm">
            <div className="formCadastro">
                <span className="title">Cadastrar Usuário</span>
                <Form className="formularioCadastro" onSubmit={handleSubmit(submeterForm)}>
                    <Form.Item label="Nome:" name="nome">
                        <Input placeholder="escreva seu nome" {...register("nome")}/>
                    </Form.Item>

                    <Form.Item label="E-mail:" name="email">
                        <Input placeholder="escreva seu email" {...register("email")}/>
                    </Form.Item>

                    <Form.Item label="Senha:" name="senha">
                        <Input.Password placeholder="escreva sua senha" {...register("senha")}/>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{ offset: -1, span: 16 }}>

                        <Button type="primary" htmlType="button" onClick={BackFeed}>
                            Submeter
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default PaginaCadastro