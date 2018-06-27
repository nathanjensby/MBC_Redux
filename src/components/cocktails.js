import React, { Component } from "react";
import styled from 'styled-components';
import CocktailContainer from '../containers/cocktailContainer';

export default class Cocktails extends Component {
  componentDidMount() {
    const { getCocktails } = this.props;
    getCocktails();
  }

  componentWillReceiveProps(nextProps) {
    const { selectedIngredients, getCocktails } = this.props;
    if (selectedIngredients !== nextProps.selectedIngredients) {
      getCocktails(nextProps.selectedIngredients);
    }
  }

  render() {
    const { cocktails } = this.props;
    const cocktailsHTML = cocktails.map((cocktail, index) => (
      <CocktailContainer
        {...cocktail}
        key={index}
      />
    ))
    return (
      <CocktailsWrapper>
        <h1>Cocktails</h1>
        <CocktailsListWrapper>
          {cocktailsHTML}
        </CocktailsListWrapper>
      </CocktailsWrapper>
    )
  }
};

const CocktailsWrapper = styled.div`
  h1 {
    font-family: 'Sacramento', cursive;
    text-shadow: -3px 3px 6px white;
    font-size: 48px;
  }
`;

const CocktailsListWrapper = styled.section`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto auto auto;
`;
