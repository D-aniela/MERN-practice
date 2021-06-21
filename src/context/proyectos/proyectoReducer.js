import {
  AGREGAR_PROYECTO,
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  PROYECTO_ACTUAL,
  VALIDAR_FORMULARIO
} from '../../types'

export default (state, action) => {
  switch (action.type) {
    case FORMULARIO_PROYECTO:
      return {
        ...state,
        // toma una copia del state
        // lo cambia a true
        formulario: true
      }
    case OBTENER_PROYECTOS:
      return {
        ...state,
        proyectos: action.payload
      }
    case AGREGAR_PROYECTO:
      return {
        ...state,
        proyectos: [...state.proyectos, action.payload],
        formulario: false
      }
    case VALIDAR_FORMULARIO:
      return {
        ...state,
        errorformulario: true
      }
    case PROYECTO_ACTUAL:
      return {
        ...state,
        proyecto: state.proyectos.filter(
          proyecto => proyecto.id === action.payload
        )
      }
    default:
      return state
  }
}
