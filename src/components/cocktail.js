import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CocktailPropTypes } from '../util/shapes';

export default class Cocktail extends Component {
  handleCocktailClick = (event) => {
    const { id, selectCocktail } = this.props;
    event.preventDefault();
    selectCocktail(id);
  }

  static propTypes = {
    selectCocktail: PropTypes.func.isRequired,
    CocktailPropTypes,
  };

  render() {
    const { name } = this.props;
    return (
      <CocktailButton onClick={this.handleCocktailClick}>
        {name}
      </CocktailButton>
    )
  }
}

const CocktailButton = styled.button`
  padding: 10px;
`;
