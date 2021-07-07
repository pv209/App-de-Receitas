import React, { useState } from 'react';
import './style.css';
import { array, number, string } from 'prop-types';
import { Link } from 'react-router-dom';
import copy from 'clipboard-copy';
import shareIcon from '../../images/shareIcon.svg';

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
  const [copyLink, setCopyLink] = useState(false);

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

  function renderRecipeType() {
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

  function copyToClipBoard() {
    copy(`http://localhost:3000/${type}s/${id}`);
    setCopyLink(true);
  }

  return (
    <div className="card-recipes-made-container">
      <Link to={ `/${type}s/${id}` }>
        <img
          src={ image }
          alt="receita"
          data-testid={ `${index}-horizontal-image` }
        />
      </Link>
      <div className="card-recipes-made-content">
        <div>
          {renderRecipeType()}
          <button type="button" onClick={ copyToClipBoard }>
            <img
              src={ shareIcon }
              alt="share icon"
              data-testid={ `${index}-horizontal-share-btn` }
              className="share-icon"
            />
          </button>
        </div>
        <Link to={ `/${type}s/${id}` }>
          <span data-testid={ `${index}-horizontal-name` }>
            {name}
          </span>
        </Link>
        <span data-testid={ `${index}-horizontal-done-date` }>
          {`Feita em: ${doneDate}`}
        </span>
        {renderTags()}
        <span>{copyLink ? 'Link copiado!' : null}</span>
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
