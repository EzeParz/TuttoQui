import { Link } from 'react-router'
const logo = '/img/logo/logo-tuttoqui-redisenado.png'
import './Footer.css'

function Footer() {
  return (
    <footer className="tutto-footer">
      <div className="container tutto-footer-content">
        <div className="tutto-footer-brand">
          <Link to="/" aria-label="TuttoQui - Inicio">
            <img src={logo} alt="TuttoQui" className="tutto-footer-logo" />
          </Link>
          <p>Frutas, verduras y congelados.<br />Todo para tu mesa, en un solo lugar.</p>
        </div>

        <nav className="tutto-footer-nav" aria-label="Categorías del pie de página">
          <h2>Productos</h2>
          <Link to="/frutas">Frutas</Link>
          <Link to="/verduras">Verduras</Link>
          <Link to="/congelados">Congelados</Link>
        </nav>

        <div className="tutto-footer-message">
          <span className="tutto-footer-eyebrow">Tutto Qui</span>
          <p>Tu próxima comida<br />empieza acá<span>.</span></p>
        </div>
      </div>

      <div className="container tutto-footer-bottom">
        <medium>© 2026 TuttoQui.</medium>
      </div>
    </footer>
  )
}

export default Footer
