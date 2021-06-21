import React, { useReducer } from 'react'
import { TAREAS_PROYECTO } from '../../types'
import TareaContext from './tareaContext'
import tareaReducer from './tareaReducer'

const TareaState = props => {
  const initialState = {
    tareas: [
      { nombre: 'Elegir plataforma', estado: true, proyectoId: 1 },
      { nombre: 'Elegir colores', estado: true, proyectoId: 2 },
      { nombre: 'Elegir plataformas de pago', estado: true, proyectoId: 3 },
      { nombre: 'Elegir hosting', estado: true, proyectoId: 4 },
      { nombre: 'Elegir plataforma', estado: true, proyectoId: 1 },
      { nombre: 'Elegir colores', estado: true, proyectoId: 2 },
      { nombre: 'Elegir plataformas de pago', estado: true, proyectoId: 3 },
      { nombre: 'Elegir hosting', estado: true, proyectoId: 4 },
      { nombre: 'Elegir plataforma', estado: true, proyectoId: 1 },
      { nombre: 'Elegir colores', estado: true, proyectoId: 2 },
      { nombre: 'Elegir plataformas de pago', estado: true, proyectoId: 3 },
      { nombre: 'Elegir hosting', estado: true, proyectoId: 4 },
      { nombre: 'Elegir plataformas de pago', estado: true, proyectoId: 3 }
    ]
  }

  //   Crear dispatch y state
  const [state, dispatch] = useReducer(tareaReducer, initialState)

  //   Crear las funciones
  // Obtener las tareas de un proyecto
  const obtenerTareas = proyectoId => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId
    })
  }

  return (
    <TareaContext.Provider value={{ tareas: state.tareas, obtenerTareas }}>
      {props.children}
    </TareaContext.Provider>
  )
}

export default TareaState
