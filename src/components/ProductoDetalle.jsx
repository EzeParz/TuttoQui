import React from 'react'
import { useParams } from 'react-router'

function ProductoDetalle() {
    
    const {id} = useParams();

  return (
    <div>
        <h1>Detalle del Producto</h1>
        <h2></h2>
        <p>id: {id} </p>
    </div>
    
  )
}

export default ProductoDetalle