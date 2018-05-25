import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default class Ingredient extends Component {

  toggleCheck = () => {
    const { isSelected, id, removeFromSelectedIngredients, addToSelectedIngredients } = this.props;
    isSelected ? removeFromSelectedIngredients(id) : addToSelectedIngredients(id);
  }

  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    addToSelectedIngredients: PropTypes.func.isRequired,
    removeFromSelectedIngredients: PropTypes.func.isRequired,
  };

  render() {
    const { isSelected, name } = this.props;
    return (
      <IngredientsWrapper>
        <label>
          <input type="checkbox" checked={isSelected} onChange={this.toggleCheck} />
          {name}
        </label>
      </IngredientsWrapper>
    )
  }
};

const IngredientsWrapper = styled.article`

`
