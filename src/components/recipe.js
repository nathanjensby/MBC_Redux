import React, { Component } from 'react';
import { CocktailPropTypes } from '../util/shapes';
import styled from 'styled-components';

export default class Recipe extends Component {
  static propTypes = {
    selectedCocktail: CocktailPropTypes,
  }

  render() {
    const { selectedCocktail: { measurements, items, instructions } } = this.props;

    const ingredientsHTML = measurements && measurements.map((measurement, index) => (
      <li key={index}>
        {`
          ${measurement.amount} ${items.filter((item) => item.id === measurement.item_id)[0].name}
        `}
      </li>
    ));

    return (
      <RecipeWrapper>
        <h1 className="title">Recipe</h1>
        <ul>
          {ingredientsHTML}
        </ul>
        <InstructionsWrapper>
          {instructions || null}
        </InstructionsWrapper>
      </RecipeWrapper>
    )
  }
};

const RecipeWrapper = styled.main`
  h1 {
    font-family: 'Sacramento', cursive;
    text-shadow: -3px 3px 6px white;
    font-size: 48px;
  }
`;
const InstructionsWrapper = styled.div``;
