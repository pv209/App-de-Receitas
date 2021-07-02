import React from 'react';
import Button from '../shared/button';

function CardRecipeFavorite({ index, recipe }) {
  const { image, name, type, id, area, category, alcoholicOrNot } = recipe;
  return (
    <section>
      <img data-testid={ `${index}-horizontal-image` } src={ image } alt={ name } />
      <p data-testid={ `${index}-horizontal-top-text` }>{ category }</p>
      <p data-testid={ `${index}-horizontal-name` }>{ name }</p>
      <p data-testid={ `${index}-horizontal-done-date` }>{ area }</p>
      <p data-testid={ `${index}-horizontal-top-text` }>{ category }</p>
      <p data-testid={ `${index}-${type}-horizontal-tag` }>{ type }</p>
      <Button
        dataTestid={ `${index}-horizontal-share-btn` }
      />
    </section>
  );
}

export default CardRecipeFavorite;
