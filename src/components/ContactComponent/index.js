import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import InputMask from 'react-input-mask'
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
                <div className="component">
                    <Form className="form-contact-us">
                        <Form.Group className="group-form-name">
                            <Form.Label className="label-form">
                                *Nome: 
                            </Form.Label>
                            <Form.Control className="input-form" as="input" placeholder="Informe seu nome"></Form.Control>
                        </Form.Group>
                        <div className="row justify-content-center">
                            <div className="form-group form-email col-12 col-sm-12 col-md-6 col-lg-6">
                                <Form.Label className="label-form">*Email: </Form.Label>
                                <Form.Control className="input-form" as="input" type="email" placeholder="Informe seu e-mail"/>
                            </div>
                            <div className="form-group form-telephone col-12 col-sm-12 col-md-6 col-lg-6">
                                <Form.Label className="label-form">*Telefone: </Form.Label>
                                <InputMask className="input-form form-control" mask="(99) 9 9999-9999"  placeholder="(__) _ ____-____" />
                                {/* <Form.Control className="input-form" as="input" placeholder="(__)____-_____"/> */}
                            </div>
                        </div>
                        <Form.Group className="group-form-mensagem">
                            <Form.Label className="label-form">*Mensagem: </Form.Label>
                            <Form.Control className="input-form" as="textarea" rows="3" placeholder="Escreva aqui"/>
                        </Form.Group>
                        <div className="submit-button w-100 text-center">
                            <button className="btn btn-white bg-white text-uppercase">Enviar</button>
                        </div>
                    </Form>
                </div>  
            </WrapperComponent>
        )
    }
}

export default ContactComponent