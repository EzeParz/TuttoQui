import React from 'react'
import ListaDeProductos from '../ListaDeProductos/ListaDeProductos'
import { useEffect, useState } from 'react'

function ContainerDeProductosCongelados() {

    const [prod, setProd] = useState([])

    const [error, setError] = useState(null);

    const [cargando, setCargando] = useState(true);

    useEffect(() => {

        async function Datos() {
            try {
                const respuesta = await fetch('/src/data/ProdCongelados.json');
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
        <ListaDeProductos prod={prod} />
    )
}

export default ContainerDeProductosCongelados