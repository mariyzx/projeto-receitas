import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Context from "../context/Context";
import { getAllDrinks, getAllFoods, getDrinkWithFirstLetter, getDrinkWithIngredient, getDrinkWithName, getFoodWithFirstLetter, getFoodWithIngredients, getFoodWithName } from "../services/getFoodIngredient";
import { Radios, SearchInputs } from "../styles/Header";

function SearchBar() {
  const history = useHistory();
  const [radio, setRadio] = useState('');
  const [search, setSearch] = useState('');
  const {setFoods, setDrinks} = useContext(Context);
  let foodsAPI = [];
  let drinksAPI = [];
  const route = history.location.pathname;

  const handleInput = ({target}) => {
    setSearch(target.value)
  }

  const handleChange = ({target}) => {
    if (target.value === 'ingredients' && target.checked) {
      setRadio('ingredients')
    }
    if (target.value === 'name' && target.checked) {
      setRadio('name')
    }
    if (target.value === 'first-letter' && target.checked) {
      setRadio('first-letter')
    }
  }

  const searchIngredients = async () => {
    if (route === '/foods') {
      foodsAPI = await getFoodWithIngredients(search);
      setFoods(foodsAPI);
    }
    drinksAPI = await getDrinkWithIngredient(search);
    setDrinks(drinksAPI);
  }

  const searchName = async () => {
    if (route === '/foods') {
      foodsAPI = await getFoodWithName(search);
      setFoods(foodsAPI);
    }
    drinksAPI = await getDrinkWithName(search);
    setDrinks(drinksAPI)
  }

  const searchFirstLetter = async () => {
    if (route === '/foods') {
      foodsAPI = await getFoodWithFirstLetter(search);
      setFoods(foodsAPI);
    }
    drinksAPI = await getDrinkWithFirstLetter(search);
    setDrinks(drinksAPI)
  }

  const reset = async () => {
    if (route === '/foods') {
      foodsAPI = await getAllFoods();
      setFoods(foodsAPI);
    }
    drinksAPI = await getAllDrinks();
    setDrinks(drinksAPI)
  }

  const handleSearchButton = async () => {
    if (search.length > 1 && radio === 'first-letter') {
      global.alert('Your search must have only 1 (one) character');
    }
    if (radio === 'ingredients') {
      await searchIngredients()
    }
    if (radio === 'name') {
      await searchName()
    }
    if (radio === 'first-letter') {
      await searchFirstLetter()
    }
  }

  return (
    <SearchInputs className="form-check">
      <input type='text' placeholder="Search..." onChange={ handleInput } />
      <Radios>
        <label className="form-check-label">
          <input 
            type='radio'
            name="radioSearch" 
            value="ingredients" 
            className="form-check-input" 
            onChange={ handleChange } />
          Ingredients
        </label>
        <label className="form-check-label">
          <input 
            type='radio' 
            name="radioSearch" 
            value="name" 
            className="form-check-input" 
            onChange={ handleChange } />
          Name
        </label>
        <label className="form-check-label">
          <input 
            type='radio' 
            name="radioSearch" 
            value="first-letter" 
            className="form-check-input" 
            onChange={ handleChange } />
          First letter
        </label>
      </Radios>
      <button type="button" onClick={reset}>Clear</button>
      <button type="button" onClick={handleSearchButton}>Search</button>
    </SearchInputs>
  )
}

export default SearchBar;