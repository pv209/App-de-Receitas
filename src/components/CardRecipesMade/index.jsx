import React, { useState } from 'react';
import './style.css';
import { array, number, string } from 'prop-types';
import { Link } from 'react-router-dom';
import clipboardCopy from 'clipboard-copy';
import { ReactComponent as ShareIcon } from '../../images/shareIcon.svg';

// const copya = require('clipboard-copy');

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
  const [copy, setCopy] = useState(false);

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

  async function copyToclipBoard() {
    try {
      await clipboardCopy(`http://localhost:3000/${type}s/${id}`);
    } catch (error) {
      console.log(error);
    }
    setCopy(true);
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
          <ShareIcon
            data-testid={ `${index}-horizontal-share-btn` }
            width="20px"
            src="shareIcon"
            onClick={ copyToclipBoard }
          />
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
        <span>{copy ? 'Link copiado!' : null}</span>
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
