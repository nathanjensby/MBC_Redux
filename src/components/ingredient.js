import React, { Component } from 'react';
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
      <div className="ingredient">
        <label>
          <input type="checkbox" checked={isSelected} onChange={this.toggleCheck}>
          </input>
          {name}
        </label>
      </div>
    )
  }
};
