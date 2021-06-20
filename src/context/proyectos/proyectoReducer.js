import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS } from '../../types'

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
    default:
      return state
  }
}
