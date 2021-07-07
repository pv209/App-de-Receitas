import React from 'react';
import { func } from 'prop-types';
import Button from '../shared/button';
import { propsButtonAll, propsButtonDrinks, propsButtonFoods } from './data';
import './style.css';

function ButtonsRecipesMade({ allRecipes, filterFoodRecipes, filterDrinksRecipes }) {
  return (
    <div className="buttons-recipes-made">
      <Button { ...propsButtonAll } onClick={ allRecipes } />
      <Button { ...propsButtonFoods } onClick={ filterFoodRecipes } />
      <Button { ...propsButtonDrinks } onClick={ filterDrinksRecipes } />
    </div>
  );
}

export default ButtonsRecipesMade;

ButtonsRecipesMade.propTypes = {
  allRecipes: func,
  filterFoodRecipes: func,
  filterDrinksRecipes: func,
}.isRequired;
