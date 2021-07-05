import React from 'react';
import ButtonsRecipesMade from '../../components/ButtonsRecipesMade';
import CardRecipesMade from '../../components/CardRecipesMade';
import recipes from './mockLocalStorage';
import './style.css';

export default function RecipesMade() {
  const storage = localStorage.getItem('doneRecipes');
  const favoriteRecipes = storage ? JSON.parse(storage) : recipes;
  // function setLocalStorage() {
  //   localStorage.setItem('doneRecipes', JSON.stringify(recipes));
  // }

  // useEffect(() => {
  //   setLocalStorage();
  // }, []);

  // const recipesLocalSotorage = JSON.parse(localStorage.getItem('doneRecipes'));
  // console.log(recipesLocalSotorage);

  if (favoriteRecipes.length === 0) {
    return 'loading';
  }

  return (
    <>
      <h2>receitas feitas</h2>
      <section className="recipes-made-container">
        <ButtonsRecipesMade />
        <div>
          {favoriteRecipes.map((recipe, index) => (
            <CardRecipesMade
              key={ recipe.id }
              index={ index }
              image={ recipe.image }
              id={ recipe.id }
              area={ recipe.area }
              category={ recipe.category }
              name={ recipe.name }
              doneDate={ recipe.doneDate }
              tags={ recipe.tags }
              type={ recipe.type }
              alcoholicOrNot={ recipe.alcoholicOrNot }
            />
          ))}
        </div>
      </section>
    </>
  );
}
