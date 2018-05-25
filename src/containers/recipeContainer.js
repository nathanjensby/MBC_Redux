import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Recipe from '../components/recipe';

const mapStateToProps = state => ({
  selectedCocktail: state.cocktails.selectedCocktail,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {},
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
