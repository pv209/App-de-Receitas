export async function getRecipesByName(name) {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  const request = await fetch(URL);
  const data = await request.json();
  return data;
}

export async function getRecipesByFirstLetter(firstLetter) {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`;
  const request = await fetch(URL);
  const data = await request.json();
  return data;
}

export async function getRecipesByIngredients(ingredients) {
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`;
  const request = await fetch(URL);
  const data = await request.json();
  return data;
}
