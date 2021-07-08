import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Slider from 'react-slick';
import copy from 'clipboard-copy';

import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import Button from '../../components/shared/button';
import { getDrinks, getRecipeById } from '../../service/recipesApi';
import { getLocalStorage } from '../../utils/setLocalStorage';
import settingsSlide from '../../utils/constants';

function Food() {
  const [food, setFood] = useState();
  const [drinksRecommended, setDrinksRecommended] = useState([]);
  const [shared, setShared] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const history = useHistory();
  const { id } = useParams();

  async function loadData() {
    const foodData = await getRecipeById(id);
    setFood(foodData.meals[0]);

    const recommendedData = await getDrinks();
    const { drinks } = recommendedData;
    setDrinksRecommended([
      drinks[0], drinks[1], drinks[2], drinks[3], drinks[4], drinks[5],
    ]);
  }
  async function copyLink() {
    await copy(`http://localhost:3000/comidas/${id}`);
    setShared(true);
  }

  function getIngredients(foodDetail) {
    const ingredientsSize = 20;
    const ingredients = [];

    for (let index = 0; index <= ingredientsSize; index += 1) {
      const ingredient = foodDetail[`strIngredient${index}`];
      const measure = foodDetail[`strMeasure${index}`];

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

  function getVideoId(url) {
    const positionId = url.indexOf('=') + 1;
    return url.substr(positionId);
  }

  function redirectToInitRecipe() {
    history.push(`/comidas/${id}/in-progress`);
  }

  function getVideoIframe(url) {
    return (
      <iframe
        width="560"
        height="315"
        src={ `https://www.youtube.com/embed/${getVideoId(url)}` }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
        data-testid="video"
        allowFullScreen
      />
    );
  }

  function favoriteRecipe() {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    const favoriteRecipes = getLocalStorage('favoriteRecipes');
    let favoriteFood = [...favoriteRecipes, {
      id: food.idMeal,
      type: 'comida',
      area: food.strArea,
      category: food.strCategory,
      alcoholicOrNot: '',
      name: food.strMeal,
      image: food.strMealThumb,

    }];
    favoriteFood = JSON.stringify(favoriteFood);
    localStorage.setItem('favoriteRecipes', favoriteFood);
  }

  function renderFood() {
    return (
      <>
        <img
          src={ food.strMealThumb }
          alt="Comida"
          data-testid="recipe-photo"
          width="200"
        />
        <h1 data-testid="recipe-title">{ food.strMeal }</h1>
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
        <p data-testid="recipe-category">{ food.strCategory }</p>
        <p data-testid="instructions">{ food.strInstructions }</p>
        { getIngredients(food) }
        { getVideoIframe(food.strYoutube) }
        <Slider { ...settingsSlide }>
          { drinksRecommended.map((drink, index) => (
            <div key={ drink.idDrink } data-testid={ `${index}-recomendation-card` }>
              <h3 data-testid={ `${index}-recomendation-title` }>{drink.strDrink}</h3>
            </div>))}
        </Slider>
      </>
    );
  }

  useEffect(() => {
    loadData().then();
  }, []);
  useEffect(() => {
    if (food) {
      const favoriteRecipes = getLocalStorage('favoriteRecipes');
      console.log(getLocalStorage('favoriteRecipes'));
      const favorite = favoriteRecipes.some((recipe) => recipe.id === food.idMeal);

      if (favorite) setIsFavorite(true);
    }
  }, [food]);

  return (
    <main className="recipe__details">
      { food ? renderFood() : <span>Loading...</span> }
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

export default Food;
