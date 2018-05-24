import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Ingredients from "../components/ingredients.js";
import { getAllIngredients, filterItems } from '../actions/ingredientsActions';

const mapStateToProps = state => ({
  ingredients: state.ingredients.ingredients,
  filteredIngredients: state.ingredients.filteredIngredients,
  selectedIngredients: state.ingredients.selectedIngredients,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push("/about-us"),
      getAllIngredients,
      filterItems,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Ingredients);
