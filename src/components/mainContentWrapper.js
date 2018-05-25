import React, { Component } from 'react';
import styled from 'styled-components';
import Colors from '../util/colors';
import IngredientsContainer from '../containers/ingredientsContainer';
import CocktailsContainer from '../containers/cocktailsContainer';
import RecipeContainer from '../containers/recipeContainer';

export default class MainContentWrapper extends Component {
  render() {
    return (
      <ContentWrapper>
        <ContentColumn>
          <IngredientsContainer />
        </ContentColumn>
        <ContentColumn>
          <CocktailsContainer />
        </ContentColumn>
        <ContentColumn>
          <RecipeContainer />
        </ContentColumn>
      </ContentWrapper>
    )
  }
};

const ContentWrapper = styled.main`
  background-color: ${Colors.arapawa.hex};
  display: flex;
  padding: 20px;
`;

const ContentColumn = styled.article`
  background-color: ${Colors.teal.hex};
  flex: 1;
  margin: 20px;
  padding: 20px;

  h1 {
    text-align: center;
  }
`;
