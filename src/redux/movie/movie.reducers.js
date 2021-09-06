import { GET_MOVIES_ERROR, PREVIEW_MOVIE_ERROR, SET_MOVIES, SET_PREVIEW_MOVIE, SET_SEARCHING_MOVIES, SET_SEARCH_TEXT } from "./movie.types"

const INITIAL_STATE = {
  searchText : '',
  searchingMovies : false,
  movies : [],
  previewMovie : null,
  moviesError : '',
  previewMovieFailed : false
}

const movieReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SET_SEARCH_TEXT :
      return {
      ...state,
      searchText : action.payload
      }
    case SET_MOVIES : 
      return {
        ...state,
        movies : action.payload
      }
    case GET_MOVIES_ERROR : 
      return {
        ...state,
        moviesError : action.payload
      }
    case SET_PREVIEW_MOVIE : 
      return {
        ...state,
        previewMovie : action.payload
      }
    case PREVIEW_MOVIE_ERROR : 
      return {
        ...state,
        previewMovieFailed : action.payload
      }
    case SET_SEARCHING_MOVIES : 
      return {
        ...state,
        searchingMovies : action.payload
      }
    default : 
      return state
  }
}


export default movieReducer