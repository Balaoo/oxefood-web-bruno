import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

class FormProduto extends React.Component{

    render(){
        return(
            <div>

                <div style={{marginTop: '3%'}}>

                    <Container textAlign='justified' >

                        <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                        <Divider />

						<div style={{marginTop: '4%'}}>

							<Form>
                                <Form.Group widths='equal'>

									<Form.Input
										required
										fluid
										label='Nome do Produto'
										maxLength="100"
									/>

									<Form.Input
                                        required
										fluid
										label='Codigo'>
										<InputMask 
										mask="9999.9999.9999"/> 
									</Form.Input>

								</Form.Group>

                                <Form.Group widths='equal'>

									<Form.TextArea
										required
                                        placeholder="Descreva..."
										fluid
										label='Descrição'
										maxLength="100"
									/>


								</Form.Group>


								
								<Form.Group>

									<Form.Input
										fluid
                                        input type="number"
                                        
										label='Valor Unitario'
                                        width={6}>
										<InputMask
                                        placeholder="000,00"
										number="100,00" /> 
									</Form.Input>

									<Form.Input
                                        maxLength="2"
										fluid
										label='Tempo de Entrega Minimo em Minutos'
                                        width={6}>
										<InputMask 
										placeholder="30" /> 
									</Form.Input>

                                    <Form.Input
                                        maxLength="2"
                                        fluid
                                        input type="number"
                                        label='Tempo de Entrega Maximo em Minutos'
                                        width={6}
                                    >
                                        <InputMask 
                                            placeholder="40"
                                            mask="" 
                                            maskChar={null}
                                        /> 
                                    </Form.Input>

								</Form.Group>

								<Form.Group widths='equal' style={{marginTop: '4%'}}  className='form--empresa-salvar'>

									<Button
										type="button"
										inverted
										circular
										icon
										labelPosition='left'
										color='orange'
										onClick={this.listar}
										>
										<Icon name='reply' />
										Voltar
									</Button>

									<Container textAlign='right'>
										
										<Button
											inverted
											circular
											icon
											labelPosition='left'
											color='blue'
											floated='right'
											onClick={this.salvar}
										>
											<Icon name='save' />
											Salvar
										</Button>
										
									</Container>

								</Form.Group>

							</Form>
						</div>
                    </Container>
                </div>
			</div>
		)
	}
}

export default FormProduto;