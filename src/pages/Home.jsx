export default function Home(){
  return (
    <section className="card" aria-labelledby="home-title">
      <h1 id="home-title">Music App 🎧</h1>
      <p>
        Proyecto Web hecho en <strong>React</strong> que incluye:
      </p>
      <ul>
        <li>Archivo <code>JSON</code> con 5 canciones.</li>
        <li>Componente para listar canciones.</li>
        <li>Componente con info sobre mis aficiones.</li>
        <li>Rutas: <code>Inicio-Home</code> (Llevan al inicio), <code>canciones</code>, <code>aficiones</code>, y <code>contacto</code>.</li>
        <li>Extra: página 404 y formulario de contacto con CSS.</li>
      </ul>
      <p className="helper">Pasea por el menú y disfruta. Si algo crashea, fue Mercurio retrógrado. 🔮</p>
    </section>
  )
}
