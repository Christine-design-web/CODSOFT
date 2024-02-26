import React from 'react'

const Button = ({ onClickHandler, value, title }) => {
  return (
    <button
      className="bg-white hover:bg-blue hover:text-white text-primary text-base font-bold py-2 px-4 "
      onClick={() => onClickHandler(value)}
    >
      {title}
    </button>
  )
}

export default Button
