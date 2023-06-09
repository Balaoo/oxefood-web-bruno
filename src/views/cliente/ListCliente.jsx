import axios from 'axios';
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Icon, Table } from 'semantic-ui-react';

class ListCliente extends React.Component {

    state = {

        listaClientes: []

    }

    componentDidMount = () => {

        this.carregarLista();

    }
    carregarLista = () => {

        axios.get("http://localhost:8080/api/cliente")
            .then((response) => {

                this.setState({
                    listaClientes: response.data
                })
            })

    };

    formatarData = (dataParam) => {

        let data = new Date(dataParam);
        let dia = data.getDate() < 10 ? "0" + data.getDate() : data.getDate();
        let mes = (data.getMonth() + 1) < 10 ? "0" + (data.getMonth() + 1) : (data.getMonth() + 1);
        let dataFormatada = dia + "/" + mes + "/" + data.getFullYear();

        return dataFormatada
    };
    render() {
        return (
            <div>

                <div style={{ marginTop: '3%' }}>

                    <Container textAlign='justified' >

                        <h2> Cliente </h2>

                        <Divider />

                        <div style={{ marginTop: '4%' }}>

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                                floated='right'
                            >
                                <Icon name='clipboard outline' />
                                <Link to={'/cliente'}>Novo</Link>
                            </Button>
                            <br /><br /><br />

                            <Table color='orange' sortable celled>

                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Nome</Table.HeaderCell>
                                        <Table.HeaderCell>CPF</Table.HeaderCell>
                                        <Table.HeaderCell>Data de Nascimento</Table.HeaderCell>
                                        <Table.HeaderCell>Fone Celular</Table.HeaderCell>
                                        <Table.HeaderCell>Fone Fixo</Table.HeaderCell>
                                        <Table.HeaderCell textAlign='center' width={2}>Ações</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>

                                    {this.state.listaClientes.map(cliente => (

                                        <Table.Row>
                                            <Table.Cell>{cliente.nome}</Table.Cell>
                                            <Table.Cell>{cliente.cpf}</Table.Cell>
                                            <Table.Cell>{this.formatarData(cliente.dataNascimento)}</Table.Cell>
                                            <Table.Cell>{cliente.foneCelular}</Table.Cell>
                                            <Table.Cell>{cliente.foneFixo}</Table.Cell>
                                            <Table.Cell textAlign='center'>

                                                <Button
                                                    inverted
                                                    circular
                                                    color='green'
                                                    title='Clique aqui para editar os dados deste cliente'
                                                    icon>
                                                    <Link to="/cliente" state={{ id: cliente.id }} style={{ color: 'green' }}> <Icon name='edit' /> </Link>
                                                </Button>

                                                &nbsp;
                                                <Button
                                                    inverted
                                                    circular
                                                    icon='trash'
                                                    color='red'
                                                    title='Clique aqui para remover este cliente' />

                                            </Table.Cell>
                                        </Table.Row>
                                    ))}

                                </Table.Body>
                            </Table>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}

export default ListCliente;
