import React from 'react'

const Button = ({ onClickHandler, value, title }) => {
  return (
    <button onClick={onClickHandler} value={value}
      className={" hover:bg-blue hover:text-white text-primary font-bold py-1 px-4 border text-base"}>
      {title}
    </button>
  )
}

export default Button
