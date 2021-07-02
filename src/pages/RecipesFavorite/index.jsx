import React from 'react';
import Button from '../../components/shared/button';
import CardRecipeFavorite from '../../components/CardRecipeFavorite';

const data = [{
  id: 11007,
  type: 'Cocktail glass',
  area: '',
  category: 'strCategory',
  alcoholicOrNot: 'Alcoholic',
  name: 'Margarita',
  image: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
}];

function RecipesFavorite() {
  const storage = localStorage.getItem('favoriteRecipes');
  // const { favoriteRecipes } = storage ? JSON.parse(storage) : data;
  const favoriteRecipes = storage ? JSON.parse(storage) : data;
  return (
    <section>
      <Button
        type="button"
        dataTestid="filter-by-all-btn"
        name="All"
      />
      <Button
        type="button"
        dataTestid="filter-by-food-btn"
        name="Food"
      />
      <Button
        type="button"
        dataTestid="filter-by-drink-btn"
        name="Drinks"
      />
      {favoriteRecipes !== '' ? favoriteRecipes.map((recipe, index) => (
        <CardRecipeFavorite
          key={ index }
          index={ index }
          recipe={ recipe }
        />
      )) : <p>Loading...</p>}
    </section>
  );
}

export default RecipesFavorite;
