import React from 'react'
import Time from '../../assets/icons/Time.svg'
import Star from '../../assets/icons/Star.svg'
import Play from '../../assets/icons/Play.svg'
import Heart from '../../assets/icons/Heart.svg'
import NoImage from '../../assets/images/not-available.png'
import MovieCard from '../MovieCard/MovieCard'
import './movieDetails.css'
import { useDispatch, useSelector } from 'react-redux'
import { Route, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { fetchMovieFullDetails } from '../../redux/movie/movie.actions'
import SlideIn from '../SlideIn/SlideIn'


const MovieDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const previewMovie = useSelector(state => state.movieState.previewMovie);
  const previewMovieFailed = useSelector(state => state.movieState.previewMovieFailed);
  
  const similarMovies = useSelector(state => {
    return state.movieState.movies.filter(movie => movie.imdbID !== params.id)
  });
  useEffect(() => {
    if(!previewMovie) return dispatch(fetchMovieFullDetails(params.id));
  }, [previewMovie, params.id, dispatch])
  if(previewMovieFailed) return <p>Could not get movie.</p>
  if(!previewMovie) return <p>Loading...</p>
  return (
    <div>
      <Route path='/movie/preview/:id'>
        <SlideIn />
      </Route>
      <div className="movie-info">
        <img src={previewMovie === 'N/A' ? NoImage: previewMovie.Poster} alt={previewMovie.Title} className='movie-poster' />
        <div className='movie-details'>
          <h3>{previewMovie.Title}</h3>
          <p>{previewMovie.Plot}</p>
          <div className='shortDetails'>
            <span><img src={Time} alt="release date" />{previewMovie.Released}</span>
            <span><img src={Star} alt="stars" /> {previewMovie.imdbRating}</span>
            <span><img src={Play} alt="playtime" /> {previewMovie.Runtime}</span>
          </div>
          <div>
            <button className='watchNowBtn'>Watch Now</button>
            <button className='likeBtn'><img src={Heart} alt="add to watchlist" /></button>
          </div>
        </div>
      </div>
      <div className='similarMoviesContainer'>
        <h2>Similar Movies</h2>
        <div className='similarMovies'>
          {
            similarMovies.slice(0, 3).map(movie => <MovieCard movieDetails={movie} />)
          }
        </div>
        
      </div>
    </div>
  )
}

export default MovieDetails;