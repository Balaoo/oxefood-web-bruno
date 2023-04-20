import React from 'react';
import { Route, Routes } from "react-router-dom";

import FormCliente from './views/cliente/FormCliente';
import FormEntregador from './views/entregador/FormEntregador';
import Home from './views/home/Home';
import FormProduto from './views/produto/FormProduto';

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="cliente" element={ <FormCliente/> } />
                <Route path="produto" element={ <FormProduto/> } />
                <Route path="entregador" element={ <FormEntregador/> } />
            </Routes>
        </>
    )
}

export default Rotas
