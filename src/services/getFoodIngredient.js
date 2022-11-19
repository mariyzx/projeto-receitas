export async function getFoodWithIngredients(ingredient) {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getFoodWithName(name) {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getFoodWithFirstLetter(letra) {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${letra}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}


export async function getAllFoods() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const data = await response.json();
  return data;
}

export async function getDrinkWithIngredient(ingredient) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getDrinkWithName(drinkName) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getDrinkWithFirstLetter(letra) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letra}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getAllDrinks() {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  const data = await response.json();
  return data;
}

