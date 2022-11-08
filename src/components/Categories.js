import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Context from "../context/Context";
import { DivCategories } from "../styles/Recipes";

function Categories() {
  const { foodsCategories, drinksCategories } = useContext(Context);
  const history = useHistory();
  const num5 = 5;
  return (
    <DivCategories>
      { history.location.pathname === '/foods' ?

        ( foodsCategories.meals
          && foodsCategories.meals.slice(0, num5).map((category, id) => (
            <button
              key={ id }
              type="button"
            >
              {category.strCategory}
            </button>
          ))) 
          
          : ( drinksCategories.drinks
            && drinksCategories.drinks.slice(0, num5).map((category, id) => (
              <button
                key={ id }

                type="button"
              >
                {category.strCategory}
              </button>
            )))

      }
    </DivCategories>
  )
}

export default Categories;
