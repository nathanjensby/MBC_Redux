import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Cocktail from '../components/cocktail';
import { selectCocktail } from '../actions/cocktailsActions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      selectCocktail,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Cocktail);
