import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Colors from '../util/colors';
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
  background-color: ${Colors.golden.hex};
  border: 1px ${Colors.pickledBluewood.hex} solid;
  border-radius: 2px;
  color: ${Colors.pickledBluewood.hex};
  font-size: 14px;
  max-width: 150px;
  padding: 10px;
`;
