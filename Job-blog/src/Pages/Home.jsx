import React, {useEffect, useState} from "react"
import Banner from "../components/Banner"
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
      //category filtering
      if(selectedCategory){
        filteredJobs=filteredJobs.filter((jobLocation, maxPrice, experienceLevel, salaryType, postingDate) => (
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) === parseInt(selected) ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
        ));
        console.log(filteredJobs);
      }
     
      return filteredJobs.map((data, i) => <Card key={i} data={data}/>)
    }
  return (
   <div>
    <Banner query={query} handleInputChange = {handleInputChange}/>
   </div>

  )
}

export default Home