import React, { Component } from 'react'
import { Col, Form } from 'react-bootstrap'
import {
    WrapperComponent,
    ContactComponentStyle
} from './styled'

class ContactComponent extends Component {
    render () {
        return (
            <WrapperComponent>
                <ContactComponentStyle>
                </ContactComponentStyle>
                <Form className="position-absolute" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '75%'}}>
                    <div className="form-group">
                        <label>*Nome:</label>
                        <input placeholder="Informe seu nome" className="form-control" type="text"/>
                    </div>
                    <Form.Row>
                        <Col>
                            <Form.Label>*Email</Form.Label>
                            <Form.Control as="input" placeholder="Informe seu e-mail"/>
                        </Col>
                        <Col>
                            <Form.Label>*Telefone</Form.Label>
                            <Form.Control as="input" placeholder="(__)____-_____"/>
                        </Col>
                    </Form.Row>
                    <Form.Group>
                        <Form.Label>*Mensagem</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="Escreva aqui"/>
                    </Form.Group>
                    <div className="submit-button w-100 text-center">
                        <button className="btn btn-white bg-white">Enviar</button>
                    </div>
                </Form>
            </WrapperComponent>
        )
    }
}

export default ContactComponent