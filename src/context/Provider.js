import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Context from './Context';
import { getDrinkRecipe, getMealRecipe } from "../services/getRecipe";

function Provider({ children }) {
  const [foods, setFoods] = useState('');
  const [newFoods, setNewFoods] = useState([]);
  const [drinks, setDrinks] = useState('');
  const [newDrinks, setNewDrinks] = useState([]);
  const [foodsCategories, setFoodsCategories] = useState('');
  const [drinksCategories, setDrinksCategories] = useState('');
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(false);
  const [recipe, setRecipe] = useState([]);
  const [measures, setMeasures] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const foodAPI = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const data = await response.json();
      setFoods(data);
      setNewFoods(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  const drinkAPI = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const data = await response.json();
      setDrinks(data);
      setNewDrinks(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  const foodCategoryAPI = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
      const data = await response.json();
      setFoodsCategories(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  const drinkCategoryAPI = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
      const data = await response.json();
      setDrinksCategories(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  const foodByCategory = async (category) => {
    setLoading(true);
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      const data = await response.json();
      setFoods(data)
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    setFilter(!filter);
  }

  const drinkByCategory = async (category) => {
    setLoading(true);
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
      const data = await response.json();
      setDrinks(data)
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    setFilter(!filter);
  }

  const handleFilter = (category, route) => {
    if (route === '/foods') {
      foodByCategory(category)
    } else {
      drinkByCategory(category)
    }
  }

  const resetFilter = (route) => {
    if (route === '/foods') {
      setFoods(newFoods)
    } else {
      setDrinks(newDrinks)
    }
  };

  const waitMeal = async (idMeals) => {
    const data = await getMealRecipe(idMeals);
    setRecipe(data);
    setMeasures(Object.keys(data[0]).filter((e) => e.includes('strMeasure')));
    setIngredients(Object.keys(data[0]).filter((e) => e.includes('strIngredient')));
  }

  const waitDrink = async (idDrinks) => {
    const data = await getDrinkRecipe(idDrinks);
    setRecipe(data);
    setMeasures(Object.keys(data[0]).filter((e) => e.includes('strMeasure')));
    setIngredients(Object.keys(data[0]).filter((e) => e.includes('strIngredient')));
  }

  useEffect(() => { foodAPI(); drinkAPI(); foodCategoryAPI(); drinkCategoryAPI(); }, []);

  const contextValue = {
    foods,
    setFoods, 
    drinks, 
    setDrinks, 
    loading, 
    setLoading, 
    foodsCategories,
    drinksCategories,
    foodByCategory,
    drinkByCategory,
    resetFilter,
    handleFilter,
    waitMeal,
    waitDrink,
    recipe,
    measures,
    ingredients,
  }

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Provider;

