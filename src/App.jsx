import './App.css'
import { Routes, Route } from 'react-router'
import { useParams } from 'react-router'
import Inicio from './pages/Inicio'
import Frutas from './pages/Frutas'
import Congelados from './pages/Congelados'
import Verduras from './pages/Verduras'
import Layout from './components/Layout/Layout'
import ProductoDetalle from './components/ProductoDetalle'


function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/frutas" element={<Frutas />} />
        <Route path="/congelados" element={<Congelados />} />
        <Route path="/verduras" element={<Verduras />} />
        <Route path='/producto-detalle/:id' element={<ProductoDetalle/>} />
      </Routes>
    </Layout>
  )
}

export default App
