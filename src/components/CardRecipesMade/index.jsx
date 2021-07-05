import React from 'react';
import './style.css';
import { array, number, string } from 'prop-types';
import { Link } from 'react-router-dom';
import { ReactComponent as ShareIcon } from '../../images/shareIcon.svg';

export default function CardRecipesMade({
  image,
  index,
  area,
  id,
  category,
  name,
  doneDate,
  tags,
  type,
  alcoholicOrNot,
}) {
  function renderTags() {
    if (tags.length === 0) {
      return '';
    }
    return (
      <div className="tags-container">
        <span
          className="tags"
          key={ tags[0] }
          data-testid={ `${index}-${tags[0]}-horizontal-tag` }
        >
          {tags[0]}
        </span>
        <span
          className="tags"
          key={ tags[1] }
          data-testid={ `${index}-${tags[1]}-horizontal-tag` }
        >
          {tags[1]}
        </span>
      </div>
    );
  }

  function recipeType() {
    if (type === 'comida') {
      return (
        <span
          className="area-category"
          data-testid={ `${index}-horizontal-top-text` }
        >
          {`${area} - ${category}`}
        </span>
      );
    }
    return (
      <span
        className="alcoholicOrNot"
        data-testid={ `${index}-horizontal-top-text` }
      >
        {alcoholicOrNot}
      </span>
    );
  }

  return (
    <div className="card-recipes-made-container">
      <Link to={ type === 'comida' ? `/comidas/${id}` : `/bebidas/${id}` }>
        <img
          src={ image }
          alt="receita"
          data-testid={ `${index}-horizontal-image` }
        />
      </Link>
      <div className="card-recipes-made-content">
        <div>
          {recipeType()}
          <ShareIcon
            data-testid={ `${index}-horizontal-share-btn` }
            width="20px"
            src="shareIcon"
          />
        </div>
        <Link to={ type === 'comida' ? `/comidas/${id}` : `/bebidas/${id}` }>
          <span data-testid={ `${index}-horizontal-name` }>
            {name}
          </span>
        </Link>
        <span data-testid={ `${index}-horizontal-done-date` }>
          {`feita em: ${doneDate}`}
        </span>
        {renderTags()}
      </div>
    </div>
  );
}

CardRecipesMade.propTypes = {
  image: string,
  index: number,
  id: string,
  area: string,
  category: string,
  name: string,
  doneDate: string,
  tags: array,
  type: string,
  alcoholicOrNot: string,
}.isRequired;
