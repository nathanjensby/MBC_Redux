import React, { Component } from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
      <div>
        <h1>Cocktails</h1>
        {cocktailsHTML}
      </div>
    )
  }
};
