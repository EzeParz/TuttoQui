import React from 'react'
import Header from '../components/Header/Header'
import './pages.css'
import ContainerDeProductosDestacados from '../components/Producto/ContainerDeProductos/ContainerDeProductosDestacados'

function Inicio() {
  return (
    <div>
        <Header/>
        <h2 className="tituloInicio my-3">Productos destacados</h2>
        <ContainerDeProductosDestacados />
    </div>
  )
}

export default Inicio
