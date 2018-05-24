import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ingredientsReducer from './ingredientsReducer';

export default combineReducers({
  routing: routerReducer,
  ingredients: ingredientsReducer,
});
