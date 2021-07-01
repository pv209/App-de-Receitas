import React, { useState } from 'react';
import { element } from 'prop-types';

import DrinkContext from './drinkContext';

function DrinkProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchDrink() {
    const maxDrink = 12;
    const fetchApi = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const result = await fetchApi.json();
    console.log(result);
    const slice = result.drinks.slice(0, maxDrink);
    setData(slice);
    setLoading(false);
  }

  return (
    <DrinkContext.Provider value={ { data, loading, fetchDrink } }>
      {children}
    </DrinkContext.Provider>
  );
}

DrinkProvider.propTypes = {
  children: element.isRequired,
};

export default DrinkProvider;
