import React from 'react'

const Button = ({ onClickHandler, value, title }) => {
  return (
    <button
      className="bg-white hover:bg-blue text-primary font-bold py-2 px-4 pr-3 rounded mr-2"
      onClick={() => onClickHandler(value)}
    >
      {title}
    </button>
  )
}

export default Button
