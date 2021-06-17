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

          <div className="campo-form">
            <label htmlFor="email">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar Sesión"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
