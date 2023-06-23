import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../index.css';

const SearchMovies = () => {
  const { movies } = useParams();
  const [search, updateSearchMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const posterURL = 'https://image.tmdb.org/t/p/w500';
  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=1b7c076a0e4849aeefd1f3c429c99a36&query=${movies}`;

  useEffect(() => {
    const searchMovies = async () => {
      try {
        setLoading(true);
        setIsSearching(true);
        const response = await fetch(searchUrl);
        const data = await response.json();
        const movies = data.results;
        setLoading(false);
        updateSearchMovies(movies);
      } catch (error) {
        console.log('Error fetching search results:', error);
      } finally {
        setIsSearching(false);
      }
    };

    searchMovies();
  }, [movies, searchUrl]);

  const replaceSpacesWithHyphens = (title) => {
    return title.replace(/ /g, '-');
  };

  return (
    <div className='search-movies-list'>
      {isSearching || loading ? (
        <div className='loading-spinner'>
          <div className='spinner'></div>
        </div>
      ) : (
        search.map((movie) => (
          <Link
            to={`/search-movies/${movies}/${movie.id}/${replaceSpacesWithHyphens(movie.title)}`}
            key={movie.id}
          >
            <div className='search-movies' key={movie.id}>
              <h3>{movie.original_title}</h3>
              <img src={posterURL + '/' + movie.poster_path} alt={movie.title} />
              <p>{movie.overview}</p>
              <div className='movies-flex-item'>
                <p>{movie.release_date}</p>
                <p>{movie.vote_average}</p>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default SearchMovies;
