import React from 'react'

const Cell = ({value,onClick,color,disabled}) => {

  const colorClass = color === "white" ? "bg-pink-100" : "bg-gradient-to-br from-yellow-300 to-orange-400";

  return (
    <button 
      className={`${colorClass} h-20 w-20 sm:h-28 sm:w-28 lg:h-36 lg:w-36 text-3xl sm:text-5xl lg:text-6xl rounded-lg duration-200 hover:scale-110 font-bold`} 
      onClick={onClick}
      disabled={disabled}
    >
      {value?.emoji || ''}
    </button>
  )
}

export default Cell