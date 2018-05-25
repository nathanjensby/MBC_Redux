import React, { Component } from 'react';
import styled from 'styled-components';
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
  display: flex;
`;

const ContentColumn = styled.article`
  flex: 1;
  padding: 20px;
`;
