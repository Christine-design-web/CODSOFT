import React from 'react'
import { Link } from 'react-router-dom'
import {FiMapPin} from "react-icons/fi"

const Card = ({data}) => {
  const {companyName, jobTitle,companyLogo, minPrice, maxPrice, jobLocation, employmentType, postingDate, description} = data;
  
  return (
    <section className= "card">
      <Link to={"/"} className="flex gap-4 flex-col sm:flex-row items-start">
        <img src={companyLogo} alt="" />
        <div>
          <h4 className="text-primary mb-1">{companyName}</h4>
          <h3 className="text-lg font-semibold mb-2">{jobTitle}</h3>

          <div>
            <span className="flex items-center gap-2"><FiMapPin/>{jobLocation}</span>
          </div>
        </div>
      </Link>
 
    </section>
  )
}

export default Card