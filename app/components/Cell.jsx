import React from 'react'

const Cell = ({value,onClick,color}) => {

  const colorClass= color==="white" ? "bg-white" : "bg-yellow-200"

  return (
    <button className={`${colorClass} h-50 w-50 text-6xl`} onClick={onClick}>
    {value?.emoji || ''}
  </button>
  )
}

export default Cell
