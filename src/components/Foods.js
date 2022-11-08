import React, { useContext } from "react";
import Context from "../context/Context";
import { CardMeal, MainFood, StyledLink } from '../styles/Foods';

function Foods() {
  const { foods } = useContext(Context);
  return (
    <MainFood>
      { foods.meals && foods.meals.map((meal, id) => (
          <StyledLink key={id} to={`/foods/${meal.idMeal}`}>
            <CardMeal>
                <h5>{meal.strMeal}</h5>
                <img
                  width="250px"
                  src={meal.strMealThumb} />
            </CardMeal>
          </StyledLink>
        ))
      }
    </MainFood>
  )
}

export default Foods;