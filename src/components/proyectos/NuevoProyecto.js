import React, { Fragment, useContext, useState } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'

const NuevoProyecto = () => {
  // obtener state del formulario
  const proyectosContext = useContext(proyectoContext)
  const { formulario, mostrarFormulario } = proyectosContext

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

  // Mostrar el formulario
  const onClickFormulario = () => {
    mostrarFormulario()
  }

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        // onClick={() => mostrarFormulario()}
        onClick={onClickFormulario}
      >
        Nuevo Proyecto
      </button>

      {formulario ? (
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
      ) : null}
    </Fragment>
  )
}

export default NuevoProyecto
