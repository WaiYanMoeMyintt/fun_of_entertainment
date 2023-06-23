import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { movies, id, name } = useParams();
  const posterURL = "https://image.tmdb.org/t/p/w500";
  const [movie, setMovie] = useState([]);
  const movieDetailUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=1b7c076a0e4849aeefd1f3c429c99a36`;

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await fetch(movieDetailUrl);
        const movieData = await response.json();
        setMovie(movieData);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetail();
  }, [id, movieDetailUrl, name]);

  return (
    <div className="search-movies-list">
      {movie ? (
        <div className="search-movies">
          <h3>{movie.original_title}</h3>
          <img src={posterURL + "/" + movie.poster_path} alt={movie.title} />
          <p>{movie.overview}</p>
          <div className="movies-flex-item">
            <p>{movie.release_date}</p>
            <p>{movie.vote_average}</p>
          </div>
        </div>
      ) : (
        <p>Loading movie details...</p>
      )}
    </div>
  );
  
};

export default MovieDetail;
