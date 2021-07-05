import { number, shape, string } from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import copy from 'clipboard-copy';
import shareIcon from '../../images/shareIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

function CardRecipeFavorite({ index, recipe, handleClickFilter }) {
  const { id, image, name, category, area, alcoholicOrNot, type } = recipe;
  const [linkCopy, setLinkCopy] = useState(false);

  function handleClick() {
    copy(`http://localhost:3000/${type}s/${id}`);
    setLinkCopy(true);
  }

  function renderDrink() {
    return (
      <section>
        <Link to={ `/bebidas/${id}` }>
          <img
            width="200"
            data-testid={ `${index}-horizontal-image` }
            src={ image }
            alt={ name }
          />
          <p data-testid={ `${index}-horizontal-name` }>{ name }</p>
        </Link>
        <p data-testid={ `${index}-horizontal-top-text` }>{ alcoholicOrNot }</p>
        <button onClick={ handleClick } type="button">
          <img
            data-testid={ `${index}-horizontal-share-btn` }
            src={ shareIcon }
            alt="Compartilhar"
          />
        </button>
        <button onClick={ () => handleClickFilter(id) } type="button">
          <img
            data-testid={ `${index}-horizontal-favorite-btn` }
            src={ blackHeartIcon }
            alt="Favorito"
          />
        </button>
        {linkCopy && <p>Link copiado!</p>}
      </section>
    );
  }

  function renderFood() {
    return (
      <section>
        <Link to={ `/comidas/${id}` }>
          <img
            width="200"
            data-testid={ `${index}-horizontal-image` }
            src={ image }
            alt={ name }
          />
          <p data-testid={ `${index}-horizontal-name` }>{ name }</p>
        </Link>
        <p data-testid={ `${index}-horizontal-top-text` }>{ `${area} - ${category}` }</p>
        <button onClick={ handleClick } type="button">
          <img
            data-testid={ `${index}-horizontal-share-btn` }
            src={ shareIcon }
            alt="Compartilhar"
          />
        </button>
        <button onClick={ () => handleClickFilter(id) } type="button">
          <img
            data-testid={ `${index}-horizontal-favorite-btn` }
            src={ blackHeartIcon }
            alt="Favorito"
          />
        </button>
        {linkCopy && <p>Link copiado!</p>}
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
