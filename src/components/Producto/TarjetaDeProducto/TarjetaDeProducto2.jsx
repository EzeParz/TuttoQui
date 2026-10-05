import React from 'react'
import './TarjetaDeProducto.css'
import { useState } from 'react'


function TarjetaDeProducto2({ img, nombre, descripcion }) {


  return (
    <div className="tarjeta-de-producto">
      <img src={img} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
    </div>
  )
}

export default TarjetaDeProducto2