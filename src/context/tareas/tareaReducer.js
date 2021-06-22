import { AGREGAR_TAREA, TAREAS_PROYECTO } from '../../types'

export default (state, action) => {
  switch (action.type) {
    case TAREAS_PROYECTO:
      return {
        ...state,
        tareasproyecto: state.tareas.filter(
          tarea => tarea.proyectoId === action.payload
        )
      }
    case AGREGAR_TAREA:
      return {
        ...state,
        tareas: [...sate.tareas, action.payload]
      }
    default:
      return state
  }
}
