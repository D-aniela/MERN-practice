import React, { useReducer } from 'react'
import {
  AGREGAR_TAREA,
  ELIMINAR_TAREA,
  TAREAS_PROYECTO,
  VALIDAR_TAREA
} from '../../types'
import tareaReducer from './tareaReducer'
import TareaContext from './tareaContext'

const TareaState = props => {
  const initialState = {
    tareas: [
      {id:1, nombre: 'Elegir plataforma', estado: true, proyectoId: 1 },
      {id:2, nombre: 'Elegir colores', estado: true, proyectoId: 2 },
      {id:3, nombre: 'Elegir plataformas de pago', estado: true, proyectoId: 3 },
      {id:4, nombre: 'Elegir hosting', estado: true, proyectoId: 4 },
      {id:5, nombre: 'Elegir plataforma', estado: true, proyectoId: 1 },
      {id:6, nombre: 'Elegir colores', estado: true, proyectoId: 2 },
      {id:7, nombre: 'Elegir plataformas de pago', estado: true, proyectoId: 3 },
      {id:8, nombre: 'Elegir hosting', estado: true, proyectoId: 4 },
      {id:9, nombre: 'Elegir plataforma', estado: true, proyectoId: 1 },
      {id:10, nombre: 'Elegir colores', estado: true, proyectoId: 2 },
      {id:11, nombre: 'Elegir plataformas de pago', estado: true, proyectoId: 3 },
      {id:12, nombre: 'Elegir hosting', estado: true, proyectoId: 4 },
      {id:13, nombre: 'Elegir plataformas de pago', estado: true, proyectoId: 3 }
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

  // Eliminar tarea por id
  const eliminarTarea = id => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id
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
        validarTarea,
        eliminarTarea
      }}
    >
      {props.children}
    </TareaContext.Provider>
  )
}

export default TareaState
