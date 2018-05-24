import axios from 'axios';
import ActionTypes from './actionTypes';

const {
  SET_INGREDIENTS,
  ADD_TO_SELECTED_INGREDIENTS,
  REMOVE_FROM_SELECTED_INGREDIENTS,
  FILTER_ITEMS,
} = ActionTypes;

const setIngredients = (ingredients) => ({
  type: SET_INGREDIENTS,
  payload: {
    ingredients,
  }
});

const addIngredientById = (ingredientId) => ({
  type: ADD_TO_SELECTED_INGREDIENTS,
  payload: {
    ingredientId,
  }
});

const removeIngredientById = (ingredientId) => ({
  type: REMOVE_FROM_SELECTED_INGREDIENTS,
  payload: {
    ingredientId,
  }
});

const filterItemsByString = (string) => ({
  type: FILTER_ITEMS,
  payload: {
    string,
  }
});

const getAllIngredients = () => (dispatch, getState) => {
  axios.get('https://vast-castle-37901.herokuapp.com/items/')
    .then((response) => {
      dispatch(setIngredients(response.data));
    })
  };

const addToSelectedIngredients = (ingredientId) => (dispatch, getState) => {
  return dispatch(addIngredientById(ingredientId))
  };

const removeFromSelectedIngredients = (ingredientId) => (dispatch, getState) => {
  return dispatch(removeIngredientById(ingredientId))
  };

  const filterItems = (string) => (dispatch, getState) => {
    return dispatch(filterItemsByString(string))
  };

export {
  getAllIngredients,
  addToSelectedIngredients,
  removeFromSelectedIngredients,
  filterItems,
};
