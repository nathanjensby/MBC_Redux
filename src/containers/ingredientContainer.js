import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Ingredient from "../components/ingredient.js";
import { addToSelectedIngredients, removeFromSelectedIngredients } from '../actions/ingredientsActions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addToSelectedIngredients,
      removeFromSelectedIngredients,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Ingredient);
