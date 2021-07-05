import { number, shape, string } from 'prop-types';
import React from 'react';
import shareIcon from '../../images/shareIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

function CardRecipeFavorite({ index, recipe }) {
  const { image, name, category, area, alcoholicOrNot, type } = recipe;

  function renderDrink() {
    return (
      <section>
        <img
          width="200"
          data-testid={ `${index}-horizontal-image` }
          src={ image }
          alt={ name }
        />
        <p data-testid={ `${index}-horizontal-name` }>{ name }</p>
        <p data-testid={ `${index}-horizontal-top-text` }>{ alcoholicOrNot }</p>
        <button type="button">
          <img
            data-testid={ `${index}-horizontal-share-btn` }
            src={ shareIcon }
            alt="Compartilhar"
          />
        </button>
        <button type="button">
          <img
            data-testid={ `${index}-horizontal-favorite-btn` }
            src={ blackHeartIcon }
            alt="Favorito"
          />
        </button>
      </section>
    );
  }

  function renderFood() {
    return (
      <section>
        <img
          width="200"
          data-testid={ `${index}-horizontal-image` }
          src={ image }
          alt={ name }
        />
        <p data-testid={ `${index}-horizontal-name` }>{ name }</p>
        <p data-testid={ `${index}-horizontal-top-text` }>{ `${area} - ${category}` }</p>
        <button type="button">
          <img
            data-testid={ `${index}-horizontal-share-btn` }
            src={ shareIcon }
            alt="Compartilhar"
          />
        </button>
        <button type="button">
          <img
            data-testid={ `${index}-horizontal-favorite-btn` }
            src={ blackHeartIcon }
            alt="Favorito"
          />
        </button>
      </section>
    );
  }

  return (
    type === 'comida' ? renderFood() : renderDrink()
  );
}

CardRecipeFavorite.propTypes = {
  index: number.isRequired,
  recipe: shape({
    id: string,
  }).isRequired,
};

export default CardRecipeFavorite;
