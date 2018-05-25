import React, { Component } from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../util/colors';
import IngredientContainer from '../containers/ingredientContainer';

export default class Ingredients extends Component {
  state = {
    searchText: '',
  }

  componentDidMount() {
    const { getAllIngredients } = this.props;
    getAllIngredients();
  }

  handleSearch = (event) => {
    const { filterIngredients } = this.props;
    const searchText = event.target.value;
    filterIngredients(searchText);
    this.setState({ searchText });
  }

  static propTypes = {
    ingredients: PropTypes.array,
    filteredIngredients: PropTypes.array,
    selectedIngredients: PropTypes.arrayOf(PropTypes.number),
    changePage: PropTypes.func.isRequired,
    getAllIngredients: PropTypes.func.isRequired,
    filterIngredients: PropTypes.func.isRequired,
  };

  static defaultProps = {
    ingredients: [],
    filteredIngredients: [],
    selectedIngredients: [],
  };


  render() {
    const { filteredIngredients, ingredients, changePage, selectedIngredients } = this.props;
    const { searchText } = this.state;
    const ingredientsHTML = (filteredIngredients.length > 0 ? filteredIngredients : ingredients)
      .map((ingredient, index) => (
        <IngredientContainer
          {...ingredient}
          key={index}
          isSelected={selectedIngredients.indexOf(ingredient.id) >= 0}
        />
      ))
    return (
      <IngredientsWrapper>
        <h1>Ingredients</h1>
        <SearchWrapper>
          <input type="text" placeholder="Search" value={searchText} onChange={this.handleSearch} />
        </SearchWrapper>
        {ingredientsHTML}
        {/* <button onClick={() => changePage()}>
          Go to about page via redux
        </button> */}
      </IngredientsWrapper>
    )
  }
};

const IngredientsWrapper = styled.main``;
const SearchWrapper = styled.div`
  padding: 10px;
`;
