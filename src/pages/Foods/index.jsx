import { shape } from 'prop-types';
import React from 'react';
import Header from '../../components/header/index';
import Footer from '../../components/footer';

import RecipesProvider from '../../context/recipesContext/recipesProvider';

function Foods({ location }) {
  return (
    <RecipesProvider>
      <Header location={ location } pageTitle="Comidas" />
      <p>Comidas</p>
      <Footer />
    </RecipesProvider>
  );
}

Foods.propTypes = {
  location: shape({}).isRequired,
};

export default Foods;
