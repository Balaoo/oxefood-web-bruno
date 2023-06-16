import axios from "axios";
import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import { ENDERECO_API } from "../../Util";

export default function FormEntregador() {

	const [idEntregador, setIdEntregador] = useState();
	const [nome, setNome] = useState();
	const [cpf, setCpf] = useState();
	const [rg, setRg] = useState();
	const [dataNascimento, setDataNascimento] = useState();
	const [foneCelular, setFoneCelular] = useState();
	const [foneFixo, setFoneFixo] = useState();
	const [qtdEntregasRealizadas, setQtdEntregasRealizadas] = useState();
	const [valorFrete, setValorFrete] = useState();
	const [enderecoRua, setEnderecoRua] = useState();
	const [enderecoNumero, setEnderecoNumero] = useState();
	const [enderecoBairro, setEnderecoBairro] = useState();
	const [enderecoCidade, setEnderecoCidade] = useState();
	const [enderecoCep, setEnderecoCep] = useState();
	const [enderecoUf, setEnderecoUf] = useState();
	const [enderecoComplemento, setEnderecoComplemento] = useState();
	const [ativo, setAtivo] = useState();
	const { state } = useLocation();


	function salvar() {

		let entregadorRequest = {

			nome: nome,
			cpf: cpf,
			rg: rg,
			dataNascimento: dataNascimento,
			foneCelular: foneCelular,
			foneFixo: foneFixo,
			qtdEntregasRealizadas: qtdEntregasRealizadas,
			valorFrete: valorFrete,
			enderecoRua: enderecoRua,
			enderecoNumero: enderecoNumero,
			enderecoBairro: enderecoBairro,
			enderecoCidade: enderecoCidade,
			enderecoCep: enderecoCep,
			enderecoUf: enderecoUf,
			enderecoComplemento: enderecoComplemento,
			ativo: ativo
		}


		if (idEntregador != null) { //Alteração:
			axios.put(ENDERECO_API + "api/entregador/" + idEntregador, entregadorRequest)
			.then((response) => { console.log('Entregador alterado com sucesso.') })
			.catch((error) => { console.log('Erro ao alterar um entregador.') })
		} else { //Cadastro:
			axios.post(ENDERECO_API + "api/entregador", entregadorRequest)
			.then((response) => { console.log('Entregador cadastrado com sucesso.') })
			.catch((error) => { console.log('Erro ao incluir o entregador.') })
		}
 
	}

useEffect(() => {
       		if (state != null && state.id != null) {
           		axios.get(ENDERECO_API + "api/entregador/" + state.id)
.then((response) => {
               	    	       setIdEntregador(response.data.id)
               	    	       setNome(response.data.nome)
               	    	       setCpf(response.data.cpf)
               	    	       setDataNascimento(response.data.dataNascimento)
               	    	       setFoneCelular(response.data.foneCelular)
               	    	       setFoneFixo(response.data.foneFixo)
           		})
       		}
   	}, [state])

	return (
		<div>

			<div style={{ marginTop: '3%' }}>

				<Container textAlign='justified' >

					<h2> <span style={{ color: 'darkgray' }}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

					<Divider />

					<div style={{ marginTop: '4%' }}>

						<Form>

							<Form.Group widths='equal'>

								<Form.Input
									required
									fluid
									label='Nome'
									maxLength="100"
									value={nome}
									onChange={e => setNome(e.target.value)}
								/>

								<Form.Input
									fluid
									label='CPF'>
									<InputMask
										placeholder="xxx.xxx.xxx-xx"
										mask="999.999.999-99"
										value={cpf}
										onChange={e => setCpf(e.target.value)}
									/>

								</Form.Input>

								<Form.Input
									fluid
									label='Rg'>
									<InputMask
										placeholder="xx.xxx.xxx"
										mask="99.999.999"
										value={rg}
										onChange={e => setRg(e.target.value)} />

								</Form.Input>
							</Form.Group>

							<Form.Group widths='equal'>

								<Form.Input
									fluid
									label='Data Nascimento'
									width={6}
								>
									<InputMask
										mask="99/99/9999"
										maskChar={null}
										placeholder="Ex: 20/03/1985"
										value={dataNascimento}
										onChange={e => setDataNascimento(e.target.value)}
									/>
								</Form.Input>

								<Form.Input
									fluid
									label='Fone Celular'
									width={6}>
									<InputMask
										placeholder='(xx)xxxxx-xxxx'
										mask="(99)99999-9999"
										value={foneCelular}
										onChange={e => setFoneCelular(e.target.value)} />
								</Form.Input>

								<Form.Input
									fluid
									label='Fone Fixo'
									width={6}>
									<InputMask
										placeholder='(xx)xxxx-xxxx'
										mask="(99)99999-9999"
										value={foneFixo}
										onChange={e => setFoneFixo(e.target.value)} />
								</Form.Input>

								<Form.Input
									fluid
									label='Qntd entregas realizadas'
									width={4}
									value={qtdEntregasRealizadas}
									onChange={e => setQtdEntregasRealizadas(e.target.value)}>
								</Form.Input>

								<Form.Input
									fluid
									label='Valor por frete'
									width={4}
									mask="99.99"
									value={valorFrete}
									onChange={e => setValorFrete(e.target.value)}>
								</Form.Input>

							</Form.Group>

							<Form.Group widths='equal'>
								<Form.Input
									required
									fluid
									label='Rua'
									width={13}
									maxLength="100"
									value={enderecoRua}
									onChange={e => setEnderecoRua(e.target.value)}>

								</Form.Input>

							</Form.Group>
							<Form.Input
								required
								fluid
								label='Numero'
								width={3}
								value={enderecoNumero}
								onChange={e => setEnderecoNumero(e.target.value)}>
							</Form.Input>

							<Form.Group widths='equal'>
								<Form.Input
									required
									fluid
									label='Bairro'
									width={7}
									maxLength="100"
									value={enderecoBairro}
									onChange={e => setEnderecoBairro(e.target.value)}
								/>
								<Form.Input
									required
									fluid
									label='Cidade'
									width={7}
									value={enderecoCidade}
									onChange={e => setEnderecoCidade(e.target.value)}
								/>



								<Form.Input
									fluid
									label='Cep'
									width={2}>
									<InputMask
										mask="99999-999"
										value={enderecoCep}
										onChange={e => setEnderecoCep(e.target.value)} />
								</Form.Input>
							</Form.Group>

							<Form.Input label="Uf"
								multiple=""
							>
								<select
									value={enderecoUf}
									onChange={e => setEnderecoUf(e.target.value)}
								>
									<option value="" disabled selected hidden>Selecione</option>
									<option value="AC">Acre</option>
									<option value="AL">Alagoas</option>
									<option value="AP">Amapá</option>
									<option value="AM">Amazonas</option>
									<option value="BA">Bahia</option>
									<option value="CE">Ceará</option>
									<option value="DF">Distrito Federal</option>
									<option value="ES">Espírito Santo</option>
									<option value="GO">Goiás</option>
									<option value="MA">Maranhão</option>
									<option value="MT">Mato Grosso</option>
									<option value="MS">Mato Grosso do Sul</option>
									<option value="MG">Minas Gerais</option>
									<option value="PA">Pará</option>
									<option value="PB">Paraíba</option>
									<option value="PR">Paraná</option>
									<option value="PE">Pernambuco</option>
									<option value="PI">Piauí</option>
									<option value="RJ">Rio de Janeiro</option>
									<option value="RN">Rio Grande do Norte</option>
									<option value="RS">Rio Grande do Sul</option>
									<option value="RO">Rondônia</option>
									<option value="RR">Roraima</option>
									<option value="SC">Santa Catarina</option>
									<option value="SP">São Paulo</option>
									<option value="SE">Sergipe</option>
									<option value="TO">Tocantins</option>
								</select>


							</Form.Input>

							<Form.Input
								fluid
								label='Uf'
								width={16}
								placeholder="Insira seu estado"
								value={enderecoUf}

							>
							</Form.Input>



							<Form.Group >
								<Form.Input
									fluid
									label='Complemento'
									width={16}
									value={enderecoComplemento}
									onChange={e => setEnderecoComplemento(e.target.value)}>
								</Form.Input>
							</Form.Group>

							<Form.Input
								required
								label="Ativo?"

							>
								<div value={ativo}
									onChange={e => setAtivo(e.target.value)}	>
									<input type="radio" name="sn" value={true} /><label> SIM </label>
									<input type="radio" name="sn" value={false} /><label> NÃO </label>
								</div>
							</Form.Input>
							<Form.Group widths='equal' style={{ marginTop: '4%' }} className='form--empresa-salvar'>

								<Button
									type="button"
									inverted
									circular
									icon
									labelPosition='left'
									color='orange'
								>
									<Icon name='reply' />
									<Link to={'/list-entregador'}>Voltar</Link>
								</Button>

								<Container textAlign='right'>

									<Button
										inverted
										circular
										icon
										labelPosition='left'
										color='blue'
										floated='right'
										onClick={() => salvar()}


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
