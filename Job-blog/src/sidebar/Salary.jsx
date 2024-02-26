import React from 'react'
import Button from './Button'

const Salary = ({handleChange, handleClick}) => {
  return (
    <div>
        <h4 className="text-lg font-medium mb-2">Salary</h4>
        <div className="flex flex-wrap">
            <Button onClickHandler={handleClick} value="" title="Hourly"/>
            <Button onClickHandler={handleClick} value="Monthly" title="Monthly" className="pr-4"/>
            <Button onClickHandler={handleClick} value="Yearly" title="Yearly" className="pr-4"/>
        </div>
    </div>
  )
}

export default Salary