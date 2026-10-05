import { Link } from 'react-router'
const logo = '/img/logo/logo-tuttoqui-redisenado.png'
import React from 'react'
import './NavBar.css' 


function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light01" aria-label="Navegación principal">
      <div className="container">
        <Link className="navbar-brand logoNav" to="/">
          <img className="logo" src={logo} alt="TuttoQui - Inicio" />
        </Link>

        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Abrir o cerrar el menú">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse nav-items" id="menu">
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <Link className="nav-link nav-li-animacion" to="/congelados">
                CONGELADOS
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link nav-li-animacion" to="/frutas">
                FRUTAS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-li-animacion" to="/verduras">
                VERDURAS
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav nav-actions">
            <li className="nav-item">
              <a href="" className="nav-link nav-li-animacion">PERFIL</a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link nav-li-animacion">CARRITO</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
