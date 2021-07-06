import React, { useState } from 'react';
import { element } from 'prop-types';

import FoodContext from './foodContext';

function FoodProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categorys, setCategorys] = useState([]);
  const [toggle, setToggle] = useState('');


  async function filterByCategory(category) {
    const maxMeal = 12;
    if (category === toggle) {
      return fetchFood();
    }
    setToggle(category);
    setLoading(true);
    const fetchApi = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const result = await fetchApi.json();
    const newdata = result.meals;
    const slice = newdata.slice(0, maxMeal);
    setData(slice);
    setLoading(false);
  }

  return (
    <FoodContext.Provider
      value={ { data, loading, fetchFood, fetchCategory, categorys, filterByCategory } }
    >
      {children}
    </FoodContext.Provider>
  );
}

FoodProvider.propTypes = {
  children: element.isRequired,
};

export default FoodProvider;
