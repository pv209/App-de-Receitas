import React from 'react';
import Button from '../../components/shared/button';
import CardRecipeFavorite from '../../components/CardRecipeFavorite';

const data = {
  favoriteRecipes: [{
    id: 'id-da-receita',
    type: 'comida-ou-bebida',
    area: 'area-da-receita-ou-texto-vazio',
    category: 'categoria-da-receita-ou-texto-vazio',
    alcoholicOrNot: 'alcoholic-ou-non-alcoholic-ou-texto-vazio',
    name: 'nome-da-receita',
    image: 'imagem-da-receita',
  }],
};

function RecipesFavorite() {
  const storage = localStorage.getItem('favoriteRecipes');
  const { favoriteRecipes } = storage ? JSON.parse(storage) : data;
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
      {favoriteRecipes !== ''
        && favoriteRecipes.map((recipe, index) => (
          <CardRecipeFavorite
            key={ index }
            index={ index }
            recipe={ recipe }
          />
        ))}
    </section>
  );
}

export default RecipesFavorite;
