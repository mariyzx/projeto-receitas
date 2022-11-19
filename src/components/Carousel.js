import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Context from "../context/Context";
import { CarouselDiv } from "../styles/RecipeDetails";

function Carousel() {
  const { drinks, foods } = useContext(Context);
  const history = useHistory();
  const route = history.location.pathname;
  return (
    <CarouselDiv>
      { drinks.drinks &&
        ((route.includes('foods') && drinks.drinks) ||
        (route.includes(drinks) && foods.foods)) ? (
          drinks.drinks.slice(0, 6).map((drink, i) => (
            <div key={i}>
              <p>{drink.strDrink}</p>
              <img src={ drink.strDrinkThumb } alt="" />
            </div>
          ))
         ) : (
          foods.meals.slice(0, 6).map((meal, i) => (
            <div key={i}>
              <p>{meal.strMeal}</p>
              <img src={meal.strMealThumb} alt="" />
            </div>
          ))
         )
      }
    </CarouselDiv>
  )
}

export default Carousel;