import React, { useContext } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'

const Tarea = ({ tarea }) => {
  // obtener state de proyectos
  const proyectosContext = useContext(proyectoContext)
  const { proyecto } = proyectosContext

  // Obtener la funcion del context tarea
  const tareasContext = useContext(tareaContext)
  const {
    eliminarTarea,
    obtenerTareas,
    cambiarEstadoTarea,
    guardarTareaActual
  } = tareasContext

  // extraer proyecto
  const [proyectoActual] = proyecto

  // funcion que se ejecuta cuando el usuario presiona el boton de leiminar
  const tareaEliminar = id => {
    eliminarTarea(id)
    obtenerTareas(proyectoActual.id)
  }

  // funcion que modifica el estado de las tareas
  const cambiarEstado = tarea => {
    if (tarea.estado) {
      tarea.estado = false
    } else {
      tarea.estado = true
    }
    cambiarEstadoTarea(tarea)
  }

  // Agrega una tarea actual cuando el usuario desea editarla
  const seleccionarTarea = tarea => {
    guardarTareaActual(tarea)
  }

  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>

      <div className="estado">
        {tarea.estado ? (
          <button
            type="button"
            onClick={() => cambiarEstado(tarea)}
            className="completo"
          >
            Completo
          </button>
        ) : (
          <button
            type="button"
            onClick={() => cambiarEstado(tarea)}
            className="incompleto"
          >
            Incompleto
          </button>
        )}
      </div>

      <div className="acciones">
        <button
          type="button"
          onClick={() => seleccionarTarea(tarea)}
          className="btn btn-primario"
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => tareaEliminar(tarea.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  )
}

export default Tarea
