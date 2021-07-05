import { number, shape, string } from 'prop-types';
import React from 'react';
// import React, { useEffect, useState } from 'react';
// import { getRecipeById } from '../../service/recipesApi';
import Button from '../shared/button';

function CardRecipeFavorite({ index, recipe }) {
  // const [recipeFavorite, setRecipeFavorite] = useState({});
  // const { image, name, type, id, area, category, alcoholicOrNot } = recipe;
  const { image, name, category, area, type } = recipe;

  // useEffect(() => {
  //   async function fetchApi() {
  //     const data = await getRecipeById(id);
  //     setRecipeFavorite(data);
  //   }
  //   fetchApi();
  // }, []);

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
      <p data-testid={ `${index}-${type}-horizontal-tag` }>{ type }</p>
      <Button
        dataTestid={ `${index}-horizontal-share-btn` }
        name="compartilhar"
      />
      <Button
        dataTestid={ `${index}-horizontal-favorite-btn` }
        name="desfavoritar"
      />
    </section>
  );
}

CardRecipeFavorite.propTypes = {
  index: number.isRequired,
  recipe: shape({
    id: string,
  }).isRequired,
};

export default CardRecipeFavorite;
