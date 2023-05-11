import axios from 'axios';
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Icon, Table } from 'semantic-ui-react';

class ListProduto extends React.Component{

    state = {
 
        listaProdutos: []
       
    }
 
    componentDidMount = () => {
       
        this.carregarLista();
       
    }
    carregarLista = () => {

        axios.get("http://localhost:8080/api/produto")
        .then((response) => {
           
            this.setState({
                listaProdutos: response.data
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
    render(){
        return(
            <div>
 
                <div style={{marginTop: '3%'}}>
 
                    <Container textAlign='justified' >
 
                        <h2> Produto </h2>
 
                        <Divider />
 
                        <div style={{marginTop: '4%'}}>
 
                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                                floated='right'
                            >
                                <Icon name='clipboard outline' />
                                <Link to={'/produto'}>Novo</Link>
                            </Button>
                            <br/><br/><br/>
                      
                      <Table color='orange' sortable celled>

                          <Table.Header>
                              <Table.Row>
                                  <Table.HeaderCell>Nome</Table.HeaderCell>
                                  <Table.HeaderCell>Codigo</Table.HeaderCell>
                                  <Table.HeaderCell>Descricao</Table.HeaderCell>
                                  <Table.HeaderCell>valor Unitario</Table.HeaderCell>
                                  <Table.HeaderCell>tempo Entrega Minimo</Table.HeaderCell>
                                  <Table.HeaderCell>tempo Entrega Maximo</Table.HeaderCell>
                                  <Table.HeaderCell textAlign='center' width={2}>Ações</Table.HeaderCell>
                              </Table.Row>
                          </Table.Header>
                     
                          <Table.Body>

                              { this.state.listaProdutos.map(produto => (

                                  <Table.Row>
                                      <Table.Cell>{produto.titulo}</Table.Cell>
                                      <Table.Cell>{produto.descricao}</Table.Cell>
                                      <Table.Cell>{this.formatarData(produto.codigo)}</Table.Cell>
                                      <Table.Cell>{produto.valorUnitario}</Table.Cell>
                                      <Table.Cell>{produto.tempoEntregaMinimo}</Table.Cell>
                                      <Table.Cell>{produto.tempoEntregaMaximo}</Table.Cell>
                                      <Table.Cell textAlign='center'>
                                         
                                          <Button
                                              inverted
                                              circular
                                              icon='edit'
                                              color='blue'
                                              itle='Clique aqui para editar os dados deste produto' /> &nbsp;
                                               <Button
                                                   inverted
                                                   circular
                                                   icon='trash'
                                                   color='red'
                                                   title='Clique aqui para remover este produto' />

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

export default ListProduto;
