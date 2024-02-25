import React, {useEffect, useState} from "react"
import Banner from "../components/Banner"
import Card from "../components/Card"
import Jobs from "./Jobs"
import Sidebar from "../sidebar/Sidebar"

const Home = () => {
  const[selectedCategory,setSelectedCategory] = useState(null);
  const [jobs,setJobs] = useState([]);
  
  useEffect(()=> {
    fetch("jobs.json").then(res => res.json()).then(data => {
      // console.log(data)
      setJobs(data)
    });
  }, [])
  console.log(jobs)
// handle input charge
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value)
    // console.log(event.target.value);
  };
  // console.log(query)
//filter jobs by title
    const filteredItems=jobs.filter((jobs) => jobs.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    // console.log(filteredItems)

    //Radio based button  filtering
    const handleChange=(event) =>{
      setSelectedCategory(event.target.value)

    }

    //button based filtering
    const handleClick=(event) =>{
      setSelectedCategory(event.target.value)
    }

    //main function button
    const filteredData=(jobs, selected, query) => {
      let filteredJobs = jobs;

      //filtering input jobs
      if(query){
        filteredJobs=filteredItems;
      }
      if (selectedCategory) {
        filteredJobs = filteredJobs.filter((job) => (
            job.jobLocation.toLowerCase() === selected.toLowerCase() ||
            parseInt(job.maxPrice) === parseInt(selected) ||
            job.salaryType.toLowerCase() === selected.toLowerCase() ||
            job.employmentType.toLowerCase() === selected.toLowerCase()
        ));
        console.log(filteredJobs);
    }
    
     
      return filteredJobs.map((data, i) => <Card key={i} data={data}/>)
    }
    const result = filteredData(jobs, selectedCategory, query);
  return (
   <div>
    <Banner query={query} handleInputChange = {handleInputChange}/>
    {/* //main content */}
    <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">

      {/* leftside */}
       <div className="bg-white p-4 rounded">
          <Sidebar handleChange={handleChange} handleClick={handleClick}/>
       </div>

       {/* maincontent */}
       <div className="col-span-2 bg-white p-4 rounded"> <Jobs result={result}/></div>

       {/* rightside */}
       <div className="bg-white p-4 rounded">right</div>
     
    </div>
   </div>
   

  )
}

export default Home