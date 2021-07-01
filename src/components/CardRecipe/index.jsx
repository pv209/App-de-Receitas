import { number, shape, string } from 'prop-types';
import React from 'react';

function CardRecipe({ recipe, typeFilter, index }) {
  return (
    <section data-testid={ `${index}-recipe-card` }>
      <p data-testid={ `${index}-card-name` }>{recipe[`str${typeFilter}`]}</p>
      <img
        width="200"
        data-testid={ `${index}-card-img` }
        src={ recipe[`str${typeFilter}Thumb`] }
        alt={ recipe[`str${typeFilter}`] }
      />
    </section>
  );
}

CardRecipe.propTypes = {
  recipe: shape({}).isRequired,
  typeFilter: string.isRequired,
  index: number.isRequired,
};

export default CardRecipe;
