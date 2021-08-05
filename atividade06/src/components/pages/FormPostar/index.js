import { Form, Input, Button } from 'antd';
import history from '../../History'
import './index.css'

function FormPostar() {

  function BackFeed(){
    history.push("/")
  }
  return (
    <div className="formulario">
      <Form className="formularioPostar">
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Por favor, escreva sua mensagem.',
            },
          ]}
        >
          <Input placeholder="escreva sua mensagem" />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: -1,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" onClick={BackFeed}>
            Submeter
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormPostar