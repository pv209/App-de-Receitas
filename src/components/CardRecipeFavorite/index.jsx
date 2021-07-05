import { number, shape, string } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { getRecipeById } from '../../service/recipesApi';
import Button from '../shared/button';
import { ReactComponent as ShareIcon } from '../../images/shareIcon.svg';
import { ReactComponent as BlackHeartIcon } from '../../images/blackHeartIcon.svg';

function CardRecipeFavorite({ index, recipe }) {
  const [recipeFavorite, setRecipeFavorite] = useState({});
  const { id, image, name, category, area } = recipe;

  useEffect(() => {
    async function fetchApi() {
      const data = await getRecipeById(id);
      setRecipeFavorite(data);
    }
    fetchApi();
  });

  const { strTags } = recipeFavorite || { strTags: '' };
  console.log(strTags);

  return (
    <section>
      <img
        width="200"
        data-testid={ `${index}-horizontal-image` }
        src={ image }
        alt={ name }
      />
      <p data-testid={ `${index}-horizontal-name` }>{ name }</p>
<<<<<<< HEAD
      <p data-testid={ `${index}-horizontal-top-text` }>{ `${area} - ${category}` }</p>
      <p data-testid={ `${index}-${type}-horizontal-tag` }>{ type }</p>
=======
      <p data-testid={ `${index}-horizontal-top-text` }>{ category }</p>
      <p data-testid={ `${index}-horizontal-done-date` }>{ area }</p>
>>>>>>> 33e3bb11eee53bb2cc3d9dd9bec1714f83520b2e
      <Button
        dataTestid={ `${index}-horizontal-share-btn` }
        name={ <ShareIcon /> }
      />
      <Button
        dataTestid={ `${index}-horizontal-favorite-btn` }
        name={ <BlackHeartIcon /> }
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
