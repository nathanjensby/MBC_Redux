import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Cocktails from '../components/cocktails';
import { getCocktails } from '../actions/cocktailsActions';

const mapStateToProps = state => ({
  selectedIngredients: state.ingredients.selectedIngredients,
  cocktails: state.cocktails.cocktails,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCocktails,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Cocktails);
