import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import LinkIcon from '../../components/shared/link';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import Button from '../../components/shared/button';
import { getDrink, getMeals } from '../../service/recipesApi';

function Drink() {
  const [drink, setDrink] = useState();
  const [foods, setFoods] = useState([]);
  const { id } = useParams();

  async function loadData() {
    const drinkData = await getDrink(id);
    setDrink(drinkData.drinks[0]);

    const recommendedData = await getMeals();
    setFoods(recommendedData.meals);
  }

  function getIngredients(foodDetail) {
    const ingredientsSize = 20;
    const ingredients = [];

    for (let index = 0; index <= ingredientsSize; index += 1) {
      const ingredient = foodDetail[`strIngredient${index}`];

      if (ingredient) {
        const ingredientElement = (
          <span data-testid={ `${index - 1}-ingredient-name-and-measure` }>
            { ingredient }
          </span>
        );
        ingredients.push(ingredientElement);
      }
    }

    return ingredients;
  }

  function renderFood() {
    return (
      <>
        <img
          src={ drink.strDrinkThumb }
          alt="Comida"
          data-testid="recipe-photo"
          width="200"
        />
        <h1 data-testid="recipe-title">{ drink.strDrink }</h1>
        <LinkIcon
          href="#"
          imgPath={ shareIcon }
          imgAlt="#"
          testIdLink="share-btn"
        />
        <LinkIcon
          href="#"
          imgPath={ whiteHeartIcon }
          imgAlt="#"
          testIdLink="favorite-btn"
        />
        <p data-testid="recipe-category">{ drink.strCategory }</p>
        <p data-testid="instructions">{ drink.strInstructions }</p>
        { getIngredients(drink) }
        <Swiper slidesPerView={ 2 }>
          { foods.map((food, index) => (
            <SwiperSlide
              key={ food.idMeal }
              data-testid={ `${index}-recomendation-card` }
            >
              {food.strMeal}
            </SwiperSlide>))}
        </Swiper>
      </>
    );
  }

  useEffect(() => {
    loadData().then();
  }, []);

  return (
    <main>
      { drink ? renderFood() : <span>Loading...</span> }
      <Button type="button" name="Iniciar Receita" dataTestid="start-recipe-btn" />
    </main>
  );
}

export default Drink;
