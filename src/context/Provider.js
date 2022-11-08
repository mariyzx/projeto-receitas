import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({children}) {
  const [foods, setFoods] = useState('');
  const [drinks, setDrinks] = useState('');
  const [foodsCategories, setFoodsCategories] = useState('');
  const [drinksCategories, setDrinksCategories] = useState('');
  const [loading, setLoading] = useState(false);

  const foodAPI = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const data = await response.json();
      setFoods(data);
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

  useEffect(() => { foodAPI(); drinkAPI(); foodCategoryAPI(); drinkCategoryAPI(); }, []);

  const contextValue = { foods, setFoods, drinks, setDrinks, loading, setLoading, foodsCategories, drinksCategories }

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Provider;

