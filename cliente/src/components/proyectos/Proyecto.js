import React, { useContext } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'

const Proyecto = ({ proyecto }) => {
  // obtener state de proyectos
  const proyectosContext = useContext(proyectoContext)
  const { proyectoActual } = proyectosContext

  // Obtener funcion context de tarea
  const tareasContext = useContext(tareaContext)
  const { obtenerTareas } = tareasContext

  // Funcion para agregar el proyecto actual
  const seleccionarProyecto = id => {
    proyectoActual(id) //Fijar un proyecto actual
    obtenerTareas(id) //Filtrar las tareas al dar click
  }

  return (
    <ul>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => seleccionarProyecto(proyecto.id)}
      >
        {proyecto.nombre}
      </button>
    </ul>
  )
}

export default Proyecto
