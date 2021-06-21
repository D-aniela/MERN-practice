import React, { Fragment, useContext } from 'react'
import Tarea from './Tarea'
import proyectoContext from '../../context/proyectos/proyectoContext'

const ListadoTareas = () => {
  // obtener state del listado
  const proyectosContext = useContext(proyectoContext)
  const { proyecto } = proyectosContext

  // Si no hay proyecto seleccionado
  if (!proyecto) return <h2>Selecciona un proyecto</h2>

  // Array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto

  const tareasProyecto = [
    { nombre: 'Elegir plataforma', estado: true },
    { nombre: 'Elegir colores', estado: true },
    { nombre: 'Elegir plataformas de pago', estado: true },
    { nombre: 'Elegir hosting', estado: true }
  ]

  return (
    <Fragment>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>{' '}
          </li>
        ) : (
          tareasProyecto.map(tarea => <Tarea tarea={tarea} />)
        )}

        <button type="button" className="btn btn-eliminar">
          Eliminar Proyecto &times;
        </button>
      </ul>
    </Fragment>
  )
}

export default ListadoTareas
