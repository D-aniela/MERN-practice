import React, { useReducer } from 'react'
import proyectoContext from './proyectoContext'
import proyectoReducer from './proyectoReducer'

const ProyectoState = props => {
  //pasar state inicial
  const initialState = {
    formulario: false
  }

  //   Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectoReducer, initialState)

  //   Serie de funciones para el CRUD
  return (
    // desde aqui nacen los datos
    <proyectoContext.Provider value={{ formulario: state.formulario }}>
      {props.children}
    </proyectoContext.Provider>
  )
}

export default ProyectoState
