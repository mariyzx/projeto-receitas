import React, { useContext } from "react";
import Context from "../context/Context";

function Foods() {
  const { foods } = useContext(Context);
  return (
    <div>
      { foods.meals && foods.meals.map((meal, id) => (
          <h5 key={id}>{meal.strMeal}</h5>
        ))
      }
    </div>
  )
}

export default Foods;