import React from 'react';
import SearchBar from '../../components/SearchBar';

import RecipesProvider from '../../context/recipesContext/recipesProvider';

function Foods() {
  return (
    <RecipesProvider>
      <SearchBar />
      <p>Comidas</p>
    </RecipesProvider>
  );
}

export default Foods;
