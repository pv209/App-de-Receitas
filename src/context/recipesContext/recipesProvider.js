import React, { useState } from 'react';
import { element } from 'prop-types';

import RecipesContext from './recipesContext';
import { filterMethodFoods, filterMethodDrinks } from '../../utils/functions';

function RecipesProvider({ children }) {
  const [foods, setFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);

  async function getSubmitApiFoods(text, ingredients, name, firtsLetter) {
    const requestApi = filterMethodFoods(text, ingredients, name, firtsLetter);
    if (requestApi.validFirstLetter) {
      return alert('Pesquisar por apenas uma letra');
    }
    if (text) {
      const data = await requestApi.get(text);
      console.log(data);
      setFoods(data.meals);
    }
  }

  async function getSubmitApiDrinks(text, ingredients, name, firtsLetter) {
    const requestApi = filterMethodDrinks(text, ingredients, name, firtsLetter);
    if (requestApi.validFirstLetter) {
      return alert('Pesquisar por apenas uma letra');
    }
    if (text) {
      const data = await requestApi.get(text);
      console.log(data);
      setDrinks(data.meals);
    }
  }

  const stateRecipes = {
    foods,
    drinks,
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
