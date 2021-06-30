import React from 'react';

import Input from '../shared/input';
import Button from '../shared/button';
import {
  propsSearchFirstLetter,
  propsSearchIngredients,
  propsSearchName,
  propsSearchText,
} from './data';

function SearchBar() {
  return (
    <section>
      <Input { ...propsSearchText } />
      <Input { ...propsSearchIngredients } />
      <Input { ...propsSearchName } />
      <Input { ...propsSearchFirstLetter } />
      <Button
        dataTestid="exec-search-btn"
        type="button"
        name="Buscar"
      />
    </section>
  );
}

export default SearchBar;
