import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <section className="card" style={{textAlign:'center'}}>
      <h1>404 — Página no encontrada</h1>
      <p className="helper">Ups… parece que esta ruta se fue de tapas. 🍻</p>
      <p>
        <Link to="/">Volver al inicio</Link>
      </p>
    </section>
  )
}
