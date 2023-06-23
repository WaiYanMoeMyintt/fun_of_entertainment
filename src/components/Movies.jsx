import React from 'react'
import { useState, useEffect } from 'react'
const Movies = () => {
   const [movies, setMovies] = useState([]);
  //  https://api.themoviedb.org/3/person/popular?api_key=1b7c076a0e4849aeefd1f3c429c99a36
   const posterURL = "https://image.tmdb.org/t/p/w500";
   const movies_url = "https://api.themoviedb.org/3/discover/movie?api_key=1b7c076a0e4849aeefd1f3c429c99a36";

   useEffect(()=>{
      const requestTheMoves = async ()=>{
        try {
          const sendTheData = await fetch(movies_url);
          const getTheData = await sendTheData.json();
          const moviesData = getTheData.results;
          setMovies(moviesData);
        }

        catch (err){
            console.log("API request is fail" , err.message);
        }
      }
      requestTheMoves();
   },[]);
  
  return (
    <div className='movies'>
         {
            movies.map((items)=>(
                <div className='movies-list' key={items.id}>
               
                    <h3>{items.original_title}</h3>
                    
                        
                      <img src =  {posterURL + "/" + items.poster_path} alt = {items.title} />
                      <p>{items.overview}</p>
                      <div className='flex-item'>
                           <p>{items.release_date}</p>
                           <p>{items.vote_average}</p>
                      </div>
                </div>
            ))
         }
    </div>
  )
}

export default Movies