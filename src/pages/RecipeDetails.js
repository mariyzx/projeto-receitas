import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { AiOutlineShareAlt } from 'react-icons/ai'
import { MdFavoriteBorder } from 'react-icons/md'
import Carousel from "../components/Carousel";
import Context from "../context/Context";
import { ShareAndFavButton, StartButton } from "../styles/Buttons";
import { DivDetails, Ingredients, ShareAndFav, StepByStep } from "../styles/RecipeDetails";
import { StyledLink } from "../styles/Recipes";

function RecipeDetails() {
  const { idMeals, idDrinks } = useParams();
  const [copied, setCopied] = useState(false);
  const history = useHistory();
  const { recipe, drinks, foods, waitMeal, waitDrink, measures, ingredients, inProgress } = useContext(Context);
  useEffect(() => {
    setCopied(false);
    const inProgressList = JSON.parse(localStorage.getItem('inProgressRecipes'))
    if (idMeals) { waitMeal(idMeals, inProgressList) }
    if (idDrinks) { waitDrink(idDrinks, inProgressList) }
  }, [])

  const cond = () => {
   if (history.location.pathname.includes('foods')) {
    return 'Foods';
   } else {
    return 'Drinks';
   }
  }

  const copyRecipe = () => {
    const url = window.location.href
    navigator.clipboard.writeText(url);
    setCopied(true);
  }


  const saveThisProgress = () => {
    const inProgressList = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (inProgressList === null) {
      if (idMeals) {
        const firstMeal = { cocktails: { }, meals: { [idMeals]: [] } };
        localStorage.setItem('inProgressRecipes', JSON.stringify(firstMeal));
      }
      if (idDrinks) {
        const firstCocktail = { cocktails: { [idDrinks]: [] }, meals: { } };
        localStorage.setItem('inProgressRecipes', JSON.stringify(firstCocktail));
      }
    }
    if (inProgressList !== null) {
      if (idMeals) {
        const anotherMeal = {
          cocktails: { ...inProgressList.cocktails },
          meals: { ...inProgressList.meals, [idMeals]: [] },
        };
        localStorage.setItem('inProgressRecipes', JSON.stringify(anotherMeal));
      }
      if (idDrinks) {
        const anotherCocktail = {
          cocktails: { ...inProgressList.cocktails, [idDrinks]: [] },
          meals: { ...inProgressList.meals },
        };
        localStorage.setItem('inProgressRecipes', JSON.stringify(anotherCocktail));
      }
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
          { copied && 'Link copied!'}
          <ShareAndFav>
            <ShareAndFavButton onClick={ () => copyRecipe() }><AiOutlineShareAlt /></ShareAndFavButton>
            <ShareAndFavButton><MdFavoriteBorder /></ShareAndFavButton>
          </ShareAndFav>
          <StepByStep>
            <h4> Step-By-Step </h4>
            <p>{item.strInstructions}</p>
          </StepByStep>
          <h4>Recommendations</h4>
          <section>
           <Carousel />
          </section>
          {
            <StartButton onClick={ saveThisProgress }>
                <StyledLink to={`${history.location.pathname}in-progress`}>
                  { inProgress ? 'Continue Recipe' : 'Start Recipe'}
                </StyledLink>
              </StartButton>
          }
        </DivDetails>
      )) }
    </div>
  )
}

export default RecipeDetails;