import React from 'react'
import './TarjetaDeProducto.css'
import { useState } from 'react'
import { Link } from 'react-router'


function TarjetaDeProducto2({ img, nombre, descripcion, id }) {


  return (
    /*     <>
        <Link to={`/producto-detalle/${id}`}>
        <div className="tarjeta-de-producto">
          <img src={img} alt={nombre} />
          <h3>{nombre}</h3>
          <p>{descripcion}</p>
        </div>
        </Link>
        </> */
    <div className="tarjeta-de-producto">
      <img src={img} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
    </div>
  )
}

export default TarjetaDeProducto2