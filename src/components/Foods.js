import React, { useContext } from "react";
import Context from "../context/Context";
import { CardRecipe, MainRecipe, StyledLink } from '../styles/Recipes';
import Categories from "./Categories";

function Foods() {
  const { foods, loading } = useContext(Context);
  return (
    <div>
      <Categories />

      <MainRecipe>
        {loading ? <h4>Loading...</h4>

        : ((foods.meals) && foods.meals.map((meal, id) => (
          <StyledLink key={id} to={`/foods/${meal.idMeal}`}>
              <CardRecipe>
                  <h5>{meal.strMeal}</h5>
                  <img
                    alt=""
                    width="250px"
                    src={meal.strMealThumb} />
              </CardRecipe>
            </StyledLink>
          ))
          )}
          
          {(foods.meals === null ? <h5>Sorry, food not found!</h5> : null)}
      </MainRecipe>
    </div>

  )
}

export default Foods;