import React, { useContext, useState } from 'react';

import Input from '../shared/input';
import Button from '../shared/button';
import {
  propsSearchFirstLetter,
  propsSearchIngredients,
  propsSearchName,
  propsSearchText,
} from './data';
import recipesContext from '../../context/recipesContext/recipesContext';

function SearchBar() {
  const [searchText, setSearchText] = useState('');
  const [searchIngredients, setSearchIngredients] = useState(false);
  const [searchName, setSearchName] = useState(false);
  const [searchFirstLetter, setSearchFirstLetter] = useState(false);
  const { getSubmitApi } = useContext(recipesContext);

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
        onClick={ () => {
          getSubmitApi(searchText, searchIngredients, searchName, searchFirstLetter);
        } }
      />
    </section>
  );
}

export default SearchBar;
