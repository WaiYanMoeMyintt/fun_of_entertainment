import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Latest from './components/Latest';
import Trending from './components/Trending';
import Page from './components/Page';
import Movies from './components/Movies';
import SearchMovies from './components/SearchMovies';
import MovieDetail from './components/pages/MovieDetail';
import SingleMovie from './components/pages/SingleMovie';
import "./index.css";
const App = () => {
  return (
     <BrowserRouter>
        <Navbar>
           <Routes>
                <Route path='/' element = {<Movies />} />
                <Route path='/upcoming' element = {<Latest />} />
                <Route path='/trending' element = {<Trending />} />
                <Route path='/movies-list/:id/:name' element = {<SingleMovie />} />
                <Route path='*' element = {<Page />} />
                <Route path='/search-movies/:movies' element = {<SearchMovies />} />
                <Route path='/search-movies/:movies/:id/:name' element={<MovieDetail />} />

           </Routes>
           </Navbar>
     </BrowserRouter>
  )
}

export default App