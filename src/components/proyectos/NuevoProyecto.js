import React, { Fragment, useState } from 'react'

const NuevoProyecto = () => {
  //state para proyecto
  const [proyecto, guardarProyecto] = useState({
    nombre: ''
  })

  //extraer nombre de proyecto
  const { nombre } = proyecto

  //lees los contenidos del input
  const onChangeProyecto = e => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value
    })
  }

  //cuando el usuario envia un proyecto
  const onSubmitProyecto = e => {
    e.preventDefault()
  }
  
  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario">
        Nuevo Proyecto
      </button>
      <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
        <input
          type="text"
          className="input-text"
          placeholder="Nombre proyecto"
          name="nombre"
          value={proyecto}
          onChange={onChangeProyecto}
        />

        <input
          type="submit"
          value="Agregar Proyecto"
          className="btn btn-primario btn-block"
        />
      </form>
    </Fragment>
  )
}

export default NuevoProyecto