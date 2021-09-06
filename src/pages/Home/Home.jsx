import React from 'react'
import { useSelector } from 'react-redux';
import Search from '../../components/Search/Search'
import Layout from '../../components/Layout/Layout'
import MovieCard from '../../components/MovieCard/MovieCard';
import './home.css'
import { Route } from 'react-router-dom';
import SlideIn from '../../components/SlideIn/SlideIn';

const Home = () => {
  const searchText = useSelector(state => state.movieState.searchText);
  const movies = useSelector(state => state.movieState.movies);
  const error = useSelector(state => state.movieState.moviesError);
  const searchingMovies = useSelector(state => state.movieState.searchingMovies);
  if(searchingMovies) return (
    <Layout>
      <h1>Explore</h1>
      <Search />
      <p>Searching...</p>
    </Layout>
  ) 
  return (
    <Layout>
      <Route path='/movie/preview/:id'>
        <SlideIn />
      </Route>
      <h1>Explore</h1>
      <Search />
      {movies.length > 0 && searchText ? <span>Results for : <span className='bold'>{searchText}</span></span> : ''}
      <div className='movieCardsContainer'>
        {movies.map(movie => <MovieCard movieDetails={movie} key={movie.imdbID}/>)}
        {<p>{error}</p>}
      </div>
    </Layout>
  )
}


export default Home