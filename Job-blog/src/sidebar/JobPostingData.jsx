import React from 'react'
import InputField from '../components/InputField'

const JobPostingData = (handleChange) => {
    const now= new Date();
  console.log(now)
    const twentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000);
    const SevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
    const ThirtyDaysAgo = new Date(now - 30 * 24 * 60 * 601000);
   
    // console.log(twentyFourHoursAgo)
    //convert date to string

    const twentyFourHoursAgo = twentyFourHoursAgo.toISOString().slice(0,10);
    console.log(twentyFourHoursAgo)
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Job Posting Date</h4>
      
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