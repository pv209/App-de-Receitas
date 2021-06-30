import React, { useState } from 'react';
import { element } from 'prop-types';

import RecipesContext from './recipesContext';
import filterMethod from '../../utils/functions';

function RecipesProvider({ children }) {
  const [recipes, setRecipes] = useState([]);

  async function getSubmitApi(text, ingredients, name, firtsLetter) {
    const requestApi = filterMethod(text, ingredients, name, firtsLetter);
    if (requestApi.validFirstLetter) {
      return alert('Pesquisar por apenas uma letra');
    }
    if (text) {
      const data = await requestApi.get(text);
      setRecipes(data.meals);
    }
  }

  return (
    <RecipesContext.Provider value={ { recipes, getSubmitApi } }>
      {children}
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: element.isRequired,
};

export default RecipesProvider;
