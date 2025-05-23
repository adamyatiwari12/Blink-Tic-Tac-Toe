import React from 'react'

const Cell = ({value,onClick}) => {
  return (
    <button className="bg-fuchsia-200 h-50 w-50" onClick={onClick}>
    {value?.emoji || ''}
  </button>
  )
}

export default Cell
