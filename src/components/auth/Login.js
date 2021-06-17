import React from 'react'

const Login = () => {
  const onChange = () => {}

  return (
    <div className="form-usuuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar sesión</h1>
        <form>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Correo electrónico"
              onChange={onChange}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
