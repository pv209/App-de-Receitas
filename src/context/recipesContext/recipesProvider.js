import React, { useState } from 'react';
import { element } from 'prop-types';

import RecipesContext from './recipesContext';
import {
  filterMethodFoods,
  filterMethodDrinks,
  alertRequestApi,
} from '../../utils/functions';

function RecipesProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [typeFilter, setTypeFilter] = useState('');

  async function getSubmitApiFoods(text, ingredients, name, firtsLetter) {
    const requestApi = filterMethodFoods(text, ingredients, name, firtsLetter);
    if (requestApi.validFirstLetter) {
      return alert('Sua busca deve conter somente 1 (um) caracter');
    }
    if (text) {
      const data = await requestApi.get(text);
      if (!data.meals) return alertRequestApi();
      setTypeFilter('Meal');
      setRecipes(data.meals);
    }
  }

  async function getSubmitApiDrinks(text, ingredients, name, firtsLetter) {
    const requestApi = filterMethodDrinks(text, ingredients, name, firtsLetter);
    if (requestApi.validFirstLetter) {
      return alert('Sua busca deve conter somente 1 (um) caracter');
    }
    if (text) {
      const data = await requestApi.get(text);
      if (!data.drinks) return alertRequestApi();
      setTypeFilter('Drink');
      setRecipes(data.drinks);
    }
  }

  const stateRecipes = {
    recipes,
    typeFilter,
    getSubmitApiDrinks,
    getSubmitApiFoods,
  };

  return (
    <RecipesContext.Provider value={ { ...stateRecipes } }>
      {children}
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: element.isRequired,
};

export default RecipesProvider;
