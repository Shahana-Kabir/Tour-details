import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

function App() {
  const url = 'https://course-api.com/react-tours-project';
  const [tourDetails, setTourDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  
  

  const fetchData = async ()=>{
    const response = await fetch(url);
     const tours = await response.json();
      setTourDetails(tours);
      setLoading(false);       
  }

 console.log(tourDetails);

 const removeTour = (id)=> {
   const newTours = tourDetails.filter((tour) => tour.id !== id);
   setTourDetails(newTours);

 }

  useEffect(()=> {
    fetchData();
  }, [])
  if(loading){
    return(
      <main>
        <Loading />
      </main>
    )

  }

if(tourDetails.length === 0){
  return(
    <main>
      <div className = 'title'>
        <h2>No tours left</h2>
        <button onClick = {fetchData}>Refresh</button>
      </div>
    </main>
  )
}
  return (<div>           
            <Tours tourDetails = {tourDetails} removeTour = {removeTour} />
          </div>)
   
}

export default App;
