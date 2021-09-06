import { SET_SEARCH_TEXT, SET_MOVIES, GET_MOVIES_ERROR, SET_PREVIEW_MOVIE, PREVIEW_MOVIE_ERROR, SET_SEARCHING_MOVIES } from "./movie.types"
import axios from 'axios'

const key = process.env.REACT_APP_API_KEY;

export const setSearchText = text => async dispatch => {
  try {
    dispatch({
      type : SET_SEARCHING_MOVIES,
      payload : true
    })
    dispatch({
      type : SET_SEARCH_TEXT,
      payload : text
    });
    dispatch({
      type : SET_MOVIES,
      payload : []
    })
    dispatch({
      type : GET_MOVIES_ERROR,
      payload : ''
    })
    const response = await axios.get(`https://omdbapi.com/?apikey=${key}&s=${text}`);
    if(response.data.Error) {
      return dispatch({
        type : GET_MOVIES_ERROR,
        payload : response.data.Error
      })
    }
    return dispatch({
      type : SET_MOVIES,
      payload : response.data.Search
    })

  } catch (error) {
    if(error.response) {
      return dispatch({
        type : GET_MOVIES_ERROR,
        payload : error.response.data.Error
      })
    }
    
  } finally {
    dispatch({
      type : SET_SEARCHING_MOVIES,
      payload : false
    })
  }
}

export const setPreviewMovie = movie => ({
  type : SET_PREVIEW_MOVIE,
  payload : movie
});

export const fetchMovieFullDetails = movieId => async dispatch => {
  try {
    dispatch({
      type : PREVIEW_MOVIE_ERROR,
      payload : false
    })
    const response = await axios.get(`https://omdbapi.com/?apikey=${key}&i=${movieId}`);
    if(response.data.Error) {
      return dispatch({
        type : PREVIEW_MOVIE_ERROR,
        payload : true
      })
    }
    return dispatch({
      type : SET_PREVIEW_MOVIE,
      payload : response.data
    })
  } catch (error) {
    if(error.response) {
      return dispatch({
        type : PREVIEW_MOVIE_ERROR,
        payload : true
      })
    }
  }  
}