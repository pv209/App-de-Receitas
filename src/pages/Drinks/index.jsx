import React from 'react';
import { shape } from 'prop-types';
import Header from '../../components/header/index';
import Footer from '../../components/footer';

import RecipesProvider from '../../context/recipesContext/recipesProvider';

function Drinks({ location }) {
  return (
    <RecipesProvider>
      <Header location={ location } pageTitle="Bebidas" />
      <p>Bebidas</p>
      <Footer />
    </RecipesProvider>
  );
}

Drinks.propTypes = {
  location: shape({}).isRequired,
};

export default Drinks;
