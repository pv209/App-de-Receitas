import React, { useState } from 'react';
import { element } from 'prop-types';

import FoodContext from './foodContext';

function FoodProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchFood() {
    const maxMeal = 12;
    const fetchApi = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const result = await fetchApi.json();
    console.log(result);
    const slice = result.meals.slice(0, maxMeal);
    setData(slice);
    setLoading(false);
  }

  return (
    <FoodContext.Provider value={ { data, loading, fetchFood } }>
      {children}
    </FoodContext.Provider>
  );
}

FoodProvider.propTypes = {
  children: element.isRequired,
};

export default FoodProvider;
