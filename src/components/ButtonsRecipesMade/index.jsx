import React from 'react';
import Button from '../shared/button';
import { propsButtonAll, propsButtonDrinks, propsButtonFoods } from './data';
import './style.css';

export default function ButtonsRecipesMade() {
  return (
    <div className="buttons-recipes-made">
      <Button { ...propsButtonAll } />
      <Button { ...propsButtonFoods } />
      <Button { ...propsButtonDrinks } />
    </div>
  );
}
