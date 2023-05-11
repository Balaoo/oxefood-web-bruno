import React from 'react';
import { Route, Routes } from "react-router-dom";

import FormCliente from './views/cliente/FormCliente';
import ListCliente from './views/cliente/ListCliente';
import FormEntregador from './views/entregador/FormEntregador';
import ListEntregador from './views/entregador/ListEntregador';
import Home from './views/home/Home';
import FormProduto from './views/produto/FormProduto';
import ListProduto from './views/produto/ListProduto';

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="list-cliente" element={ <ListCliente/> } />
                <Route path="cliente" element={ <FormCliente/> } />
                <Route path="list-entregador" element={ <ListEntregador/> } />
                <Route path="entregador" element={ <FormEntregador/> } /> 
                <Route path="list-produto" element={ <ListProduto/> } />
                <Route path="produto" element={ <FormProduto/> } />
              
                
            </Routes>
        </>
    )
}

export default Rotas
