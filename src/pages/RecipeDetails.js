import React, { useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Context from "../context/Context";
import { StartButton } from "../styles/Buttons";
import { DivDetails, Ingredients, StepByStep } from "../styles/RecipeDetails";

function RecipeDetails() {
  const { idMeals, idDrinks } = useParams();
  const history = useHistory();
  const { recipe, drinks, foods, waitMeal, waitDrink, measures, ingredients } = useContext(Context);
  useEffect(() => {
    if (idMeals) { waitMeal(idMeals) }
    if (idDrinks) { waitDrink(idDrinks) }
  }, [])
  const cond = () => {
   if (history.location.pathname.includes('foods')) {
    return 'Foods';
   } else {
    return 'Drinks';
   }
  }

  return (
    <div>
      { (drinks.drinks && foods.meals) && recipe.map((item,i) => (
        <DivDetails key={i}>
          <h1 onClick={ () => history.goBack()}>
            { cond() }
          </h1>
          <h1>{item.strMeal ? item.strMeal : item.strDrink}</h1>
          <h3>{item.strAlcoholic? item.strAlcoholic : item.strCategory}</h3>
          <img
              src={ item.strMealThumb ? item.strMealThumb : item.strDrinkThumb }
              alt=""
              width="250px"
            />
          <Ingredients>
            <h4> Ingredients </h4>
            { measures.map((_, i) => (
              <p key={i}>
                { item[measures[i]] !== '' && item[measures[i]] }
                {' '}
                { item[ingredients[i]] !== '' && item[ingredients[i]] }
              </p>
            ))}
          </Ingredients>
          <StepByStep>
            <h4> Step-By-Step </h4>
            <p>{item.strInstructions}</p>
          </StepByStep>
          <h4>Recommendations</h4>
          <section>
           <Carousel />
          </section>
          <StartButton>Start Recipe</StartButton>
        </DivDetails>
      )) }
    </div>
  )
}

export default RecipeDetails;