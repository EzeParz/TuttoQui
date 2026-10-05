import React from 'react'
import TarjetaDeProducto2 from '../TarjetaDeProducto/TarjetaDeProducto2'
import './ListaDeProductos.css'

function ListaDeProductos2({ prod }) {
    return (
        <div className="lista-de-productos">
            {prod.map((producto) => (
                <TarjetaDeProducto2
                    key={producto.id}
                    id={producto.id}
                    img={producto.imagen}
                    nombre={producto.nombre}
                    descripcion={producto.descripcion}
                />
            ))}
        </div>
    )
}

export default ListaDeProductos2