import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Slider from 'react-slick';
import copy from 'clipboard-copy';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import Button from '../../components/shared/button';
import { getDrink, getMeals } from '../../service/recipesApi';
import { getLocalStorage } from '../../utils/setLocalStorage';
import settingsSlide from '../../utils/constants';

function Drink() {
  const [drink, setDrink] = useState();
  const [foods, setFoods] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [shared, setShared] = useState(false);
  const history = useHistory();
  const { id } = useParams();

  async function loadData() {
    const drinkData = await getDrink(id);
    setDrink(drinkData.drinks[0]);

    const recommendedData = await getMeals();
    const { meals } = recommendedData;
    setFoods([meals[0], meals[1], meals[2], meals[3], meals[4], meals[5]]);
  }
  function favoriteRecipe() {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    const favoriteRecipes = getLocalStorage('favoriteRecipes');
    let favoriteFood = [...favoriteRecipes, {
      id: drink.idDrink,
      type: 'bebida',
      area: '',
      category: drink.strCategory,
      alcoholicOrNot: drink.strAlcoholic,
      name: drink.strDrink,
      image: drink.strDrinkThumb,

    }];
    favoriteFood = JSON.stringify(favoriteFood);
    localStorage.setItem('favoriteRecipes', favoriteFood);
  }

  function getIngredients(drinkDetail) {
    const ingredientsSize = 20;
    const ingredients = [];

    for (let index = 0; index <= ingredientsSize; index += 1) {
      const ingredient = drinkDetail[`strIngredient${index}`];
      const measure = drinkDetail[`strMeasure${index}`];

      if (ingredient) {
        const ingredientElement = (
          <span data-testid={ `${index - 1}-ingredient-name-and-measure` }>
            { `${ingredient} - ${measure}` }
          </span>
        );
        ingredients.push(ingredientElement);
      }
    }

    return ingredients;
  }

  async function copyLink() {
    await copy(`http://localhost:3000/bebidas/${id}`);
    setShared(true);
  }

  function renderDrink() {
    return (
      <>
        <img
          src={ drink.strDrinkThumb }
          alt="Comida"
          data-testid="recipe-photo"
          width="200"
        />
        <h1 data-testid="recipe-title">{ drink.strDrink }</h1>
        <Button
          name={ <img src={ shareIcon } data-testid="share-btn" alt="share recipe" /> }
          onClick={ copyLink }
          type="button"
        />
        <Button
          name={ <img
            src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
            data-testid="favorite-btn"
            alt="favorite Recipe"
          /> }
          onClick={ favoriteRecipe }
          type="button"
        />

        { shared && <span>Link copiado!</span> }
        <p data-testid="recipe-category">{ drink.strAlcoholic }</p>
        <p data-testid="instructions">{ drink.strInstructions }</p>
        { getIngredients(drink) }
        <Slider { ...settingsSlide }>
          { foods.map((food, index) => (
            <div key={ food.idMeal } data-testid={ `${index}-recomendation-card` }>
              <h3 data-testid={ `${index}-recomendation-title` }>{food.strMeal}</h3>
            </div>))}
        </Slider>
      </>
    );
  }

  function redirectToInitRecipe() {
    history.push(`/bebidas/${id}/in-progress`);
  }

  useEffect(() => {
    loadData().then();
  }, []);

  useEffect(() => {
    if (drink) {
      const favoriteRecipes = getLocalStorage('favoriteRecipes');
      const favorite = favoriteRecipes.some((recipe) => recipe.id === drink.idDrink);
      if (favorite) setIsFavorite(true);
    }
  }, [drink]);

  return (
    <main className="recipe__details">
      { drink ? renderDrink() : <span>Loading...</span> }
      <Button
        type="button"
        onClick={ redirectToInitRecipe }
        name="Iniciar Receita"
        className="button_fix_bottom"
        dataTestid="start-recipe-btn"
      />
    </main>
  );
}

export default Drink;
