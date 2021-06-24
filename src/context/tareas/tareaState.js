import React, { useReducer } from 'react'
import { AGREGAR_TAREA, TAREAS_PROYECTO, VALIDAR_TAREA } from '../../types'
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
    ],
    tareasproyecto: null
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

  // Agregar tarea al proyecto seleccionado
  const agregarTarea = tarea => {
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea
    })
  }

  // Valida y muestra error en caso de que sea necesario
  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA
    })
  }

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        obtenerTareas,
        agregarTarea,
        validarTarea
      }}
    >
      {props.children}
    </TareaContext.Provider>
  )
}

export default TareaState
