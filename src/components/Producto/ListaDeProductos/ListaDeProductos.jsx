import React from 'react'
import TarjetaDeProducto from '../TarjetaDeProducto/TarjetaDeProducto'
import './ListaDeProductos.css'

function ListaDeProductos({ prod }) {
    return (
        <div className="lista-de-productos">
            {prod.map((producto) => (
                <TarjetaDeProducto
                    key={producto.id}
                    img={producto.imagen}
                    nombre={producto.nombre}
                    descripcion={producto.descripcion}
                    precio={producto.precio}
                    stock={producto.stock}
                />
            ))}
        </div>
    )
}

export default ListaDeProductos