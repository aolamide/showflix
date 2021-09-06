import React from 'react'
import { Link } from 'react-router-dom'
import './moviecard.css'
import NoImage from '../../assets/images/not-available.png'
import { setPreviewMovie } from '../../redux/movie/movie.actions'
import { useDispatch } from 'react-redux'

const MovieCard = ({ movieDetails  }) => {
  const dispatch = useDispatch();
  const preview = () => {
    dispatch(setPreviewMovie(movieDetails));
  }
  return (
    <div className='movieCard'>
      <img src={movieDetails.Poster !== 'N/A' ? movieDetails.Poster : NoImage} alt={movieDetails.Title} />
      <Link to={`/movie/preview/${movieDetails.imdbID}`}>
        <button onClick={preview} className='viewButton'>View</button>
      </Link>
    </div>
  )
}


export default MovieCard;