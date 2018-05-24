import ActionTypes from '../actions/actionTypes';

const {
  SET_INGREDIENTS,
  ADD_TO_SELECTED_INGREDIENTS,
  REMOVE_FROM_SELECTED_INGREDIENTS,
} = ActionTypes;

const defaultIngredientsReducerState = {
  ingredients: [],
  selectedIngredients: [],
};

const ingredientsReducer = (state = defaultIngredientsReducerState, action) => {
  switch (action.type) {
    case SET_INGREDIENTS: {
      return Object.assign({}, state, {
        ingredients: action.payload.ingredients,
      })
    }
    case ADD_TO_SELECTED_INGREDIENTS: {
      return Object.assign({}, state, {
        selectedIngredients: state.selectedIngredients.concat([action.payload.ingredientId]),
      })
    }
    case REMOVE_FROM_SELECTED_INGREDIENTS: {
      const ingredientIndex = state.selectedIngredients.indexOf(action.payload.ingredientId);
      return Object.assign({}, state, {
        selectedIngredients: state.selectedIngredients.filter((ingredient, index) => index !== ingredientIndex),
      })
    }
    default: {
      return state;
    }
  }
};

export default ingredientsReducer;
