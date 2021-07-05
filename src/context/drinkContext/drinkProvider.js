import React, { useState } from 'react';
import { element } from 'prop-types';

import DrinkContext from './drinkContext';

function DrinkProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categorys, setCategorys] = useState([]);
  const [toggle, setToggle] = useState('');

  async function fetchDrink() {
    const maxDrink = 12;
    const fetchApi = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const result = await fetchApi.json();
    console.log(result);
    const slice = result.drinks.slice(0, maxDrink);
    setData(slice);
    setLoading(false);
  }
  async function fetchCategory() {
    const maxCategory = 5;
    const fetchApi = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    const result = await fetchApi.json();
    const slice = result.drinks.slice(0, maxCategory);
    setCategorys(slice);
  }

  async function filterByCategory(category) {
    setLoading(true);
    if (category === toggle) {
      return fetchDrink();
    }
    setToggle(category);
    const maxDrinks = 12;
    const fetchApi = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
    const result = await fetchApi.json();
    const newdata = result.drinks;
    const slice = newdata.slice(0, maxDrinks);
    setData(slice);
    setLoading(false);
  }

  return (
    <DrinkContext.Provider
      value={ { data,
        loading,
        fetchDrink,
        fetchCategory,
        categorys,
        filterByCategory } }
    >
      {children}
    </DrinkContext.Provider>
  );
}

DrinkProvider.propTypes = {
  children: element.isRequired,
};

export default DrinkProvider;
