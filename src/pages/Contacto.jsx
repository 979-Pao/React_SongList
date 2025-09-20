import { useState } from 'react'

export default function Contacto(){
  const [form, setForm] = useState({ nombre:'', email:'', mensaje:'' })
  const [touched, setTouched] = useState({})
  const [sent, setSent] = useState(false)

  function handleChange(e){
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  function handleBlur(e){
    setTouched(prev => ({ ...prev, [e.target.name]: true }))
  }

  const errors = {
    nombre: form.nombre.trim().length < 2 ? 'El nombre debe tener al menos 2 caracteres.' : '',
    email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? 'Introduce un email válido.' : '',
    mensaje: form.mensaje.trim().length < 10 ? 'El mensaje debe tener al menos 10 caracteres.' : ''
  }
  const hasErrors = Object.values(errors).some(Boolean)

  function handleSubmit(e){
    e.preventDefault()
    setTouched({ nombre:true, email:true, mensaje:true })
    if(hasErrors) return
    setTimeout(() => setSent(true), 300)
  }

  if(sent){
    return (
      <section className="card">
        <h1>Contacto</h1>
        <p className="success">¡Gracias por tu mensaje! Te responderé pronto.</p>
        <p className="helper">Mientras tanto, puedes volver a <a href="/canciones">canciones</a> para seguir escuchando.</p>
      </section>
    )
  }

  return (
    <section className="card">
      <h1>Ponte en contacto 📬</h1>
      <p className="helper">Rellena el formulario.</p>

      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input id="nombre" name="nombre" value={form.nombre} onChange={handleChange} onBlur={handleBlur} placeholder="Tu nombre" />
          {touched.nombre && errors.nombre && <div className="error">{errors.nombre}</div>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} onBlur={handleBlur} placeholder="tucorreo@dominio.com" />
          {touched.email && errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div>
          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" name="mensaje" rows="5" value={form.mensaje} onChange={handleChange} onBlur={handleBlur} placeholder="Cuéntame en qué puedo ayudarte..." />
          {touched.mensaje && errors.mensaje && <div className="error">{errors.mensaje}</div>}
        </div>

        <button type="submit" disabled={hasErrors}>Enviar</button>
      </form>
    </section>
  )
}
