import React from 'react'
import { useState, useEffect } from 'react'
const Trending = () => {
  const [trending,setTrending] = useState([]);
  const posterURL = "https://image.tmdb.org/t/p/w500";
  const apiUrl = "https://api.themoviedb.org/3/trending/movie/week?api_key=1b7c076a0e4849aeefd1f3c429c99a36"

  useEffect(()=>{
      const moviesTrending =  async()=>{
           try {
              const getTheData = await fetch(apiUrl);  
              const responseTheData = await getTheData.json();
              const extractData  = responseTheData.results;
              setTrending(extractData);
            }

           catch(err){
              console.log("API have some issures", err.message);
           }
      }
      moviesTrending();
  },[]);
  return (
    <div className='search-movies-list'>
    {
       trending.map((items)=>(
         <div className='search-movies' key={items.id}>
          
          <h3>{items.original_title}</h3>
          
              
            <img src =  {posterURL + "/" + items.poster_path} alt = {items.title} />
            <p>{items.overview}</p>
            <div className='movies-flex-item'>
                 <p>{items.release_date}</p>
                 <p>{items.vote_average}</p>
            </div>
         </div>
       ))
    }
</div>
  )
}

export default Trending