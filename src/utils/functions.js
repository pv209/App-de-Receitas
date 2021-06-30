import {
  getRecipesByFirstLetter,
  getRecipesByName,
  getRecipesByIngredients,
} from '../service/recipesApi';

function filterMethod(text, ingredients, name, firstLetter) {
  if (ingredients) return { get: getRecipesByIngredients };
  if (name) return { get: getRecipesByName };
  if (firstLetter) {
    const validFirstLetter = text.length !== 1;
    return { get: getRecipesByFirstLetter, validFirstLetter };
  }
  return console.log('Deu ruim');
}

export default filterMethod;
