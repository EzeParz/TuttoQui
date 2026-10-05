import React from 'react'
const header = '/img/header-rojo-negro.png'

function Header() {
  return (
    <div>
        <img className="img-fluid" src={header} alt="Imagen de encabezado" />
    </div>
  )
}

export default Header