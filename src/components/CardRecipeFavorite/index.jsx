import { number, shape, string } from 'prop-types';
import React from 'react';
// import { getRecipeById } from '../../service/recipesApi';
// import Button from '../shared/button';
import shareIcon from '../../images/shareIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

function CardRecipeFavorite({ index, recipe }) {
  // const [recipeFavorite, setRecipeFavorite] = useState({});
  const { image, name, category, area, alcoholicOrNot, type } = recipe;

  // useEffect(() => {
  //   async function fetchApi() {
  //     const data = await getRecipeById(id);
  //     setRecipeFavorite(data);
  //   }
  //   fetchApi();
  // });

  // const { strTags } = recipeFavorite || { strTags: '' };
  // console.log(strTags);

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
        <p data-testid={ `${index}-horizontal-alcoholic` }>{ alcoholicOrNot }</p>
        <p data-testid={ `${index}-horizontal-share-btn` } type="button">
          <img src={ shareIcon } alt="Compartilhar" />
        </p>
        <p data-testid={ `${index}-horizontal-favorite-btn` } type="button">
          <img src={ blackHeartIcon } alt="Favorito" />
        </p>
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
        <p data-testid={ `${index}-horizontal-share-btn` } type="button">
          <img src={ shareIcon } alt="Compartilhar" />
        </p>
        <p data-testid={ `${index}-horizontal-favorite-btn` } type="button">
          <img src={ blackHeartIcon } alt="Favorito" />
        </p>
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
