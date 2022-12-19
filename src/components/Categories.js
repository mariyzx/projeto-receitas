import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Context from "../context/Context";
import { DivCategories } from "../styles/pages/Recipes";

function Categories() {
  const { foodsCategories, drinksCategories, handleFilter, resetFilter } = useContext(Context);
  const history = useHistory();
  const num5 = 5;
  const route = history.location.pathname;
  return (
    <DivCategories>
      { route === '/foods' ?

        ( foodsCategories.meals
          && foodsCategories.meals.slice(0, num5).map((category, id) => (
            <button
              key={ id }
              type="button"
              onClick={ () => { handleFilter(category.strCategory, route)} }
            >
              {category.strCategory}
            </button>
            
          ))) 
          
          : ( drinksCategories.drinks
            && drinksCategories.drinks.slice(0, num5).map((category, id) => (
              <button
                key={ id }
                onClick={ () => { handleFilter(category.strCategory, route)} }
                type="button"
              >
                {category.strCategory}
              </button>
            )))

          }
        <button onClick={ () => resetFilter(route) }>All</button>
    </DivCategories>
  )
}

export default Categories;
