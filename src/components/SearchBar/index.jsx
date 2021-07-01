import React, { useContext, useState } from 'react';
import { shape, string } from 'prop-types';
import { Redirect } from 'react-router-dom';

import Input from '../shared/input';
import Button from '../shared/button';
import {
  propsSearchFirstLetter,
  propsSearchIngredients,
  propsSearchName,
  propsSearchText,
} from './data';
import recipesContext from '../../context/recipesContext/recipesContext';

function SearchBar({ location }) {
  const [searchText, setSearchText] = useState('');
  const [searchIngredients, setSearchIngredients] = useState(false);
  const [searchName, setSearchName] = useState(false);
  const [searchFirstLetter, setSearchFirstLetter] = useState(false);
  const {
    getSubmitApiFoods,
    getSubmitApiDrinks,
    recipes,
    typeFilter,
  } = useContext(recipesContext);

  function handleClick() {
    const { pathname } = location;
    const propsFunc = [
      searchText,
      searchIngredients,
      searchName,
      searchFirstLetter,
    ];

    if (pathname === '/comidas') {
      getSubmitApiFoods(...propsFunc);
    } else {
      getSubmitApiDrinks(...propsFunc);
    }
  }

  if (recipes && recipes.length === 1) {
    if (typeFilter === 'meals') {
      return <Redirect to={ `/comidas/${recipes[0].idMeal}` } />;
    }
    return <Redirect to={ `/bebidas/${recipes[0].idDrink}` } />;
  }

  return (
    <section>
      <Input
        onChange={ ({ target }) => setSearchText(target.value) }
        value={ searchText }
        { ...propsSearchText }
      />

      <Input
        onChange={ ({ target }) => setSearchIngredients(target.checked) }
        value={ searchIngredients }
        { ...propsSearchIngredients }
      />

      <Input
        onChange={ ({ target }) => setSearchName(target.checked) }
        value={ searchName }
        { ...propsSearchName }
      />

      <Input
        onChange={ ({ target }) => setSearchFirstLetter(target.checked) }
        value={ searchFirstLetter }
        { ...propsSearchFirstLetter }
      />

      <Button
        dataTestid="exec-search-btn"
        type="button"
        name="Buscar"
        onClick={ handleClick }
      />
    </section>
  );
}

SearchBar.propTypes = {
  location: shape({
    pathname: string,
  }).isRequired,
};

export default SearchBar;
