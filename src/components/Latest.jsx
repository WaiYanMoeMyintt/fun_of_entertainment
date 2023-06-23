import React from 'react'
import { useState, useEffect } from 'react'
const Latest = () => {
  const [movies,setMovies] = useState([]);

  const apiUrl = "https://api.themoviedb.org/3/movie/upcoming?api_key=1b7c076a0e4849aeefd1f3c429c99a36";
  const posterURL = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const fetchLatestMovie = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const extractData = data.results;
        setMovies(extractData);
        console.log(data);
      } catch (err) {
        console.log("API has some issues", err.message);
      }
    };
    fetchLatestMovie();
  }, []);
  return (
    <div className='search-movies-list'>
    {
       movies.map((items)=>(
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

export default Latest