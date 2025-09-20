import { Link, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Canciones from './pages/Canciones.jsx'
import Aficiones from './pages/Aficiones.jsx'
import Contacto from './pages/Contacto.jsx'
import NotFound from './pages/NotFound.jsx'


export default function App(){
  return (
    <div>
      <nav>
        <div className="nav-inner">
          <div className="brand">
            <span className="logo" />
            <span>Mi Music App</span>
          </div>
          <div className="links">
            <Link to="/">Inicio</Link>
            <Link to="/home">Home</Link>
            <Link to="/canciones">Canciones</Link>
            <Link to="/aficiones">Aficiones</Link>
            <Link to="/contacto">Contacto</Link>
            <Link to="/no-existe">Forzar 404</Link>
          </div>
        </div>
      </nav>
      <main className="container">
        <Routes>
          {/* Home debe responder en "/" y "/home" */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />

          {/* Lista de canciones */}
          <Route path="/canciones" element={<Canciones />} />

          {/* Aficiones */}
          <Route path="/aficiones" element={<Aficiones />} />

          {/* Contacto */}
          <Route path="/contacto" element={<Contacto />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <footer>Hecho con ❤️</footer>
      </main>
    </div>
  )
}
