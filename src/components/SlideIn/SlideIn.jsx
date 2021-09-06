import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect, useHistory, useParams } from 'react-router-dom'
import NoImage from '../../assets/images/not-available.png'
import { fetchMovieFullDetails } from '../../redux/movie/movie.actions'
import './slidein.css'

const SlideIn = () => {
  const [slideOut, setSlideOut] = useState(false);
  const history = useHistory();
  const previewMovie = useSelector(state => state.movieState.previewMovie);
  const previewMovieFailed = useSelector(state => state.movieState.previewMovieFailed);
  const dispatch = useDispatch();
  const params = useParams();
  const goBack = () => {
    setSlideOut(true);
    setTimeout(() => history.push('/'), 1000)
  }
  useEffect(() => {
    dispatch(fetchMovieFullDetails(params.id));
  }, [dispatch, params.id])
  if(!previewMovie) return (
    <div className='slideContainer'>
    <div className="mask" onClick={goBack}>
    </div>
    <div className={`slidein ${slideOut ? 'slideOut' : ''}`}>
      <div>
        <button className='arrow' onClick={goBack}>
          &larr;
        </button>
      </div>
      <div className='movieDetails'>
        <p>Loading...</p>
      </div>
    </div>
  </div>
  )
  if(previewMovieFailed) return <Redirect to='/' />
  return (
  <div className='slideContainer'>
    <div className="mask" onClick={goBack}>
    </div>
    <div className={`slidein ${slideOut ? 'slideOut' : ''}`}>
      <div>
        <button className='arrow' onClick={goBack}>
          &larr;
        </button>
      </div>
      <div className='movieDetails'>
        <img src={previewMovie?.Poster && previewMovie?.Poster !== 'N/A' ? previewMovie.Poster : NoImage} alt="" />
        <h3>{previewMovie?.Title ? previewMovie.Title : ''}</h3>
        <p>
          {previewMovie?.Plot ? previewMovie.Plot : ''}
        </p>
        <Link to={`/movie/view/${previewMovie.imdbID}`}>
          <button className='watchBtn'>Watch</button>
        </Link>
      </div>
    </div>
  </div>);
}
export default SlideIn;