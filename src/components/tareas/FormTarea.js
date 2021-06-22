import React, { useContext, useState } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'

const FormTarea = () => {
  // extraer si un proyecto esta activo
  const proyectosContext = useContext(proyectoContext)
  const { proyecto } = proyectosContext

  // Obtener la funcion del context tarea
  const tareasContext = useContext(tareaContext)
  const { agregarTarea } = tareasContext

  // State del formulario
  const [tarea, guardarTarea] = useState({
    nombre: ''
  })

  // extraer el nombre del proyecto
  const { nombre } = tarea

  if (!proyecto) return null

  const [proyectoActual] = proyecto

  // Leer los valores del formulario
  const handleChange = e => {
    guardarTarea({
      ...tarea,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault()

    // Agregar la nueva tarea al state
    tarea.proyectoId = proyectoActual.id
    tarea.estado = false
    agregarTarea()
  }

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre tarea..."
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>

        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value="Agregar Tarea"
          />
        </div>
      </form>
    </div>
  )
}

export default FormTarea
