import React from 'react'
import InputField from '../components/InputField'
const JobPostingData = (handleChange) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Job Posting Data</h4>
    <div>

        <label className="sidebar-label-container">
            <input type="radio" name="test" id="test" value="" onChange={handleChange}/>
            <span className="checkmark"></span>All
        </label>

        <InputField handleChange={handleChange} value="london" title="London" name="test"/>
        <InputField handleChange={handleChange} value="kenya" title="Kenya" name="test"/>
        <InputField handleChange={handleChange} value="canada" title="Canada" name="test"/>
        <InputField handleChange={handleChange} value="europe" title="Europe" name="test"/>
        <InputField handleChange={handleChange} value="dubai" title="Dubai" name="test"/>
        <InputField handleChange={handleChange} value="united states" title="United states" name="test"/>
     </div>
     </div>
  )
}

export default JobPostingData