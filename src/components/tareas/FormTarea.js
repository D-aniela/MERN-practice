import React, { useContext, useState, useEffect } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'

const FormTarea = () => {
  // extraer si un proyecto esta activo
  const proyectosContext = useContext(proyectoContext)
  const { proyecto } = proyectosContext

  // Obtener la funcion del context tarea
  const tareasContext = useContext(tareaContext)
  const {
    tareaseleccionada,
    errortarea,
    agregarTarea,
    validarTarea,
    obtenerTareas,
    actualizarTarea
  } = tareasContext

  // Effect que detecta si hay una tarea seleccionada
  useEffect(() => {
    if (tareaseleccionada !== null) {
      guardarTarea(tareaseleccionada)
    } else {
      guardarTarea({ nombre: '' })
    }
  }, [tareaseleccionada])

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

    // validar
    if (nombre.trim() === '') {
      validarTarea()
      return
    }

    // Si es edición o si es nueva tarea
    if (tareaseleccionada === null) {
      // tarea nueva
      // Agregar la nueva tarea al state
      tarea.proyectoId = proyectoActual.id
      tarea.estado = false
      agregarTarea(tarea)
    } else {
      // actualizar tarea existente
      actualizarTarea(tarea)
    }

    // Obtener y filtrar las tareas del proyecto actual
    obtenerTareas(proyectoActual.id)

    // reiniciarform
    guardarTarea({
      nombre: ''
    })
  }

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input" onKe>
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
            value={tareaseleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
          />
        </div>
      </form>
      {errortarea ? (
        <p className="mensaje error">El nombre de la tarea es obligatorio</p>
      ) : null}
    </div>
  )
}

export default FormTarea
