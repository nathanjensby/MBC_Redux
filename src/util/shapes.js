import PropTypes from 'prop-types';
const { arrayOf, number, shape, string } = PropTypes;

const IngredientPropTypes = shape({
  id: number,
  name: string,
  created_at: string,
  updated_at: string,
});

const MeasurementPropTypes = shape({
  amount: string,
  id: number,
  recipe_id: number,
  item_id: number,
  created_at: string,
  updated_at: string,
});

const CocktailPropTypes = shape({
  created_at: string,
  updated_at: string,
  name: string,
  instructions: string,
  items: arrayOf(IngredientPropTypes),
  measurements: arrayOf(MeasurementPropTypes),
});

export { IngredientPropTypes, MeasurementPropTypes, CocktailPropTypes };
