import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ingredientsReducer from './ingredientsReducer';
import cocktailsReducer from './cocktailsReducer';

export default combineReducers({
  routing: routerReducer,
  ingredients: ingredientsReducer,
  cocktails: cocktailsReducer,
});
