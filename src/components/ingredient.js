import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Colors from '../util/colors';

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
        <label className="control control-checkbox">
          <input type="checkbox" checked={isSelected} onChange={this.toggleCheck} />
          <div className="control-display"></div>
          {name}
        </label>
      </IngredientsWrapper>
    )
  }
};

const IngredientsWrapper = styled.article`
  padding: 5px 0;

    .control-checkbox {
      cursor: pointer;
      font-size: 18px;
      padding-left: 30px;
      position: relative;

      input {
        opacity: 0;
        position: absolute;
        z-index: -1;

        &:checked ~ .control-display {
          background: white;
        }

        &:checked ~ .control-display:after {
          display: block;
        }
      }
    }

    .control-display {
      background-color: white;
      border: 1px solid ${Colors.pickledBluewood.hex};
      height: 20px;
      left: 0;
      position: absolute;
      top: 0;
      width: 20px;

      &::after {
        border: solid ${Colors.golden.hex};
        border-width: 0 2px 2px 0;
        content: '';
        display: none;
        height: 8px;
        left: 8px;
        position: absolute;
        width: 3px;
        top: 4px;
        transform: rotate(45deg);
      }
    }
`
