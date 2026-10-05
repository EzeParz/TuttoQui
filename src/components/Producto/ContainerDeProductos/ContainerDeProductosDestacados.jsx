import React from 'react'
import ListaDeProductos2 from '../ListaDeProductos/ListaDeProductos2'
import { useEffect, useState } from 'react'

function ContainerDeProductosDestacados() {

    const [prod, setProd] = useState([])

    const [error, setError] = useState(null);

    const [cargando, setCargando] = useState(true);

    useEffect(() => {

        async function Datos() {
            try {
                const respuesta = await fetch('/src/data/ProdDestacados.json');
                const data = await respuesta.json();
                setProd(data);
            } catch (error) {
            setError('Error al cargar los productos');
            } finally {
                setCargando(false);
            }
        }

        Datos();
    }, []);

    return (
        <ListaDeProductos2 prod={prod} />
    )
}

export default ContainerDeProductosDestacados