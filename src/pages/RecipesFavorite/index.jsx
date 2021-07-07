import React, { useState } from 'react';
import Button from '../../components/shared/button';
import CardRecipeFavorite from '../../components/CardRecipeFavorite';
import Header from '../../components/header';

const data = [{
  id: 11007,
  type: 'comida',
  area: 'Italian',
  category: 'Vegetarian',
  alcoholicOrNot: 'Alcoholic',
  name: 'Margarita',
  image: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
}];

function RecipesFavorite() {
  const storage = localStorage.getItem('favoriteRecipes');
  const favoriteRecipes = storage ? JSON.parse(storage) : data;
  const [filterStorage, setFilterStorage] = useState(favoriteRecipes);

  function handleClickFilter(propsId) {
    const newFilterStorage = filterStorage.filter(({ id }) => id !== propsId);
    setFilterStorage(newFilterStorage);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFilterStorage));
  }

  return (
    <>
      <Header pageTitle="Receitas Favoritas" showButton={ false } />

      <section>
        <Button
          type="button"
          dataTestid="filter-by-all-btn"
          name="All"
          onClick={ () => setFilterStorage(favoriteRecipes) }
        />
        <Button
          type="button"
          dataTestid="filter-by-food-btn"
          name="Food"
          onClick={ () => setFilterStorage(filterStorage
            .filter(({ type }) => type === 'comida')) }
        />
        <Button
          type="button"
          dataTestid="filter-by-drink-btn"
          name="Drinks"
          onClick={ () => setFilterStorage(filterStorage
            .filter(({ type }) => type === 'bebida')) }
        />
        {filterStorage.map((recipe, index) => (
          <CardRecipeFavorite
            handleClickFilter={ handleClickFilter }
            key={ index }
            index={ index }
            recipe={ recipe }
          />
        ))}
      </section>
    </>
  );
}

export default RecipesFavorite;
