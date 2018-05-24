import React, { Component } from 'react';

export default class Ingredient extends Component {

  toggleCheck = () => {
    const { isSelected, id, removeFromSelectedIngredients, addToSelectedIngredients } = this.props;
    isSelected ? removeFromSelectedIngredients(id) : addToSelectedIngredients(id);
  }

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
