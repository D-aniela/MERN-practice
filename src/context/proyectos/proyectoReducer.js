import { FORMULARIO_PROYECTO } from '../../types'

export default (state, action) => {
  switch (action.type) {
    case FORMULARIO_PROYECTO:
      return {
        ...state,
        // toma una copia del state
        // lo cambia a true
        formulario: true
      }
    default:
      return state
  }
}
