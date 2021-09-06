import { combineReducers } from 'redux';

import movieReducer from './movie/movie.reducers';

export default combineReducers({
  movieState: movieReducer
});