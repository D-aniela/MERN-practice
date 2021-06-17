import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NuevaCuenta = () => {
  // Definir state para iniciar sesion
  const [usuario, guardarUsuario] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmar: ''
  })

  //Extraer usuario
  const { email, password, nombre, confirmar } = usuario

  const onChange = e => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  // Cuando el usuario quiere iniciar sesion
  const onSubmit = e => {
    e.preventDefault()
  }

  return (
    <div className="form-usuuario">
      <div className="contenedor-form sombra-dark">
        <h1>Obtener una cuenta</h1>

        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Nombre(s)"
              value={nombre}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="confirmar">Confirmar password</label>
            <input
              type="password"
              id="confirmar"
              name="confirmar"
              placeholder="Repite tu password"
              value={confirmar}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Registrarme"
            />
          </div>
        </form>
        <Link to={'/nueva-cuenta'} className="enlace-cuenta">
          Obtener Cuenta
        </Link>
      </div>
    </div>
  )
}

export default NuevaCuenta
