import React from 'react'

const Cell = ({value,onClick,color,disabled}) => {

  const colorClass = color === "white" ? "bg-gradient-to-br from-purple-100 to-pink-100 border-purple-300" : "bg-gradient-to-br from-yellow-300 to-orange-400 border-yellow-500 shadow-lg transform scale-105";

  return (
    <button 
      className={`${colorClass} h-36 w-36 text-4xl border-4 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95 font-bold`} 
      onClick={onClick}
      disabled={disabled}
    >
      {value?.emoji || ''}
    </button>
  )
}

export default Cell
