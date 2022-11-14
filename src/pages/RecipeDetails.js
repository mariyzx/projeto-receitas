import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Context from "../context/Context";

function RecipeDetails() {
  const { idMeals, idDrinks } = useParams();
  const { recipe, waitMeal, waitDrink, measures, ingredients } = useContext(Context);
  useEffect(() => {
    if (idMeals) { waitMeal(idMeals) }
    if (idDrinks) { waitDrink(idDrinks) }
  }, [])

  return (
    <div>
      { recipe.map((item,i) => (
        <div key={i}>
          <h1>{item.strMeal ? item.strMeal : item.strDrink}</h1>
          <h3>{item.strAlcoholic? item.strAlcoholic : item.strCategory}</h3>
          <img
              src={ item.strMealThumb ? item.strMealThumb : item.strDrinkThumb }
              alt=""
              width="250px"
            />
          <h4> Ingredients </h4>
          { measures.map((_, i) => (
            <p key={i}>
              { item[measures[i]] !== '' && item[measures[i]] }
              { item[ingredients[i]] !== '' && item[ingredients[i]] }
            </p>
          ))}
          <h4> Step-By-Step </h4>
          <p>{item.strInstructions}</p>
          <h4>Recommendations</h4>
          <section>
            <Carousel />
          </section>
        </div>
      )) }
    </div>
  )
}

export default RecipeDetails;