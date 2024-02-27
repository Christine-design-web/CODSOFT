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

        <div>
        <label className="sidebar-label-container">
            <input type="radio" name="test" id="test" value="" onChange={handleChange}/>
            <span className="checkmark"></span>All
        </label>

        <InputField handleChange={handleChange} value="london" title="London" name="test2"/>
        <InputField handleChange={handleChange} value="kenya" title="Kenya" name="test"/>
        <InputField handleChange={handleChange} value="canada" title="Canada" name="test"/>
        <InputField handleChange={handleChange} value="europe" title="Europe" name="test"/>
        <InputField handleChange={handleChange} value="dubai" title="Dubai" name="test"/>
        </div>
    </div>
  )
}

export default Salary