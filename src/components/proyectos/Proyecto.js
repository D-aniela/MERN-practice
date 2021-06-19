import React from 'react'

const Proyecto = ({ proyecto }) => {
  return (
    <ul>
      <button type="button" className="btn btn-blank">
        {proyecto.nombre}
      </button>
    </ul>
  )
}

export default Proyecto
