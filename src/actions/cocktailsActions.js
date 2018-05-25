import axios from 'axios';
import ActionTypes from './actionTypes';

const { SET_COCKTAILS, SET_SELECTED_COCKTAIL } = ActionTypes;

const setCocktails = (cocktailsArr) => ({
  type: SET_COCKTAILS,
  payload: {
    cocktailsArr,
  }
});

const setSelectedCocktail = (selectedCocktail) => ({
  type: SET_SELECTED_COCKTAIL,
  payload: {
    selectedCocktail,
  }
});

const getCocktails = (ingredientsArr = []) => (dispatch, getState) => {
  const cocktailsURL = ingredientsArr.length === 0
    ? "https://vast-castle-37901.herokuapp.com/recipes"
    : `https://vast-castle-37901.herokuapp.com/items/${ingredientsArr}/recipes`;
  axios.get(cocktailsURL).then((response) => {
    return dispatch(setCocktails(response.data))
  })
};

const selectCocktail = (cocktailId) => (dispatch, getState) => {
  const cocktailURL = `https://vast-castle-37901.herokuapp.com/recipes/${cocktailId}`;
  axios.get(cocktailURL).then((response) => {
    return dispatch(setSelectedCocktail(response.data))
  })
};

export { getCocktails, selectCocktail };
