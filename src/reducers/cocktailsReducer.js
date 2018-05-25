import ActionTypes from '../actions/actionTypes';

const {
  SET_COCKTAILS,
  SET_SELECTED_COCKTAIL,
} = ActionTypes;

const defaultCocktailsReducerState = {
  cocktails: [],
  selectedCocktail: {},
};

const cocktailsReducer = (state = defaultCocktailsReducerState, action) => {
  switch (action.type) {
    case SET_COCKTAILS: {
      return Object.assign({}, state, {
        cocktails: action.payload.cocktailsArr,
      })
    }
    case SET_SELECTED_COCKTAIL: {
      return Object.assign({}, state, {
        selectedCocktail: action.payload.selectedCocktail,
      })
    }
    default: {
      return state;
    }
  }
};

export default cocktailsReducer;
