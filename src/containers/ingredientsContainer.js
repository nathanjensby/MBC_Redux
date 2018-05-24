import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Ingredients from "../components/ingredients.js";
import { getAllIngredients } from '../actions/ingredientsActions';

const mapStateToProps = state => ({
  ingredients: state.ingredients.ingredients,
  selectedIngredients: state.ingredients.selectedIngredients,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push("/about-us"),
      getAllIngredients,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Ingredients);
