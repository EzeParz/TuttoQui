import React from 'react'
import './TarjetaDeProducto.css'
import { useState } from 'react'


function TarjetaDeProducto({ img, nombre, descripcion, precio, stock }) {
  const [cantidad, setCantidad] = useState(1);

  const sumar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const restar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div className="tarjeta-de-producto">
      <img src={img} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p>Precio: ${precio.toFixed(2)}</p>
      <div className="btnes">
        <button className="sumar" onClick={sumar}>+</button>
        <span className="cantidad">{cantidad}</span>
        <button className="restar" onClick={restar}>-</button>
      </div>
      <button className="boton-agregar" onClick={() => {
        alert(`Se han agregado ${cantidad} unidades de ${nombre} al carrito.`);
        setCantidad(1); // Reinicia la cantidad a 1 después de agregar al carrito
      }}>
        Agregar al carrito
      </button>
    </div>
  )
}

export default TarjetaDeProducto