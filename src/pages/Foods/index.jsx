import { shape } from 'prop-types';
import React from 'react';
import SearchBar from '../../components/SearchBar';

import RecipesProvider from '../../context/recipesContext/recipesProvider';

function Foods({ location }) {
  return (
    <RecipesProvider>
      <button type="button" data-testid="search-top-btn">Search</button>
      <SearchBar location={ location } />
      <p>Comidas</p>
    </RecipesProvider>
  );
}

Foods.propTypes = {
  location: shape({}).isRequired,
};

export default Foods;
