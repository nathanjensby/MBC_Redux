import React, { Component } from "react";
import IngredientContainer from '../containers/ingredientContainer';

export default class Ingredients extends Component {
  componentDidMount() {
    const { getAllIngredients } = this.props;
    getAllIngredients();
  }
  render() {
    const { ingredients, changePage, selectedIngredients } = this.props;
    const ingredientsHTML = ingredients.map((ingredient, index) => (
      <IngredientContainer
        {...ingredient}
        key={index}
        isSelected={selectedIngredients.indexOf(ingredient.id) >= 0}
      />
    ))
    return (
      <div>
        <h1>Ingredients</h1>
        {ingredientsHTML}
        <button onClick={() => changePage()}>
          Go to about page via redux
        </button>
      </div>
    )
  }
};
