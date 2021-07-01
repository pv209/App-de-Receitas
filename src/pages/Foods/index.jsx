import { shape } from 'prop-types';
import React from 'react';
import SearchBar from '../../components/SearchBar';
import Footer from '../../components/footer';

import RecipesProvider from '../../context/recipesContext/recipesProvider';

function Foods({ location }) {
  return (
    <RecipesProvider>
      <SearchBar location={ location } />
      <p>Comidas</p>
      <Footer />
    </RecipesProvider>
  );
}

Foods.propTypes = {
  location: shape({}).isRequired,
};

export default Foods;
