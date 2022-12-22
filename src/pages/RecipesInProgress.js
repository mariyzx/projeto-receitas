import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getDrinkRecipe, getMealRecipe } from "../services/getRecipe";
import { StartButton } from "../styles/components/Buttons";
import { Checkbox } from "../styles/components/Checkbox";
import { DivIngredients, MainProgress } from "../styles/pages/RecipeInProgress";

function RecipeInProgress() {
  const { idMeals, idDrinks} = useParams()
  const [recipe, setRecipe] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const history = useHistory();
  let [cont, setCont] = useState(0);
  const path = history.location.pathname;

  const getFoodInfo = async () => {
    if (idMeals) {
      const info = await getMealRecipe(idMeals);
      setRecipe(info[0]);
    } if (idDrinks) {
      const info = await getDrinkRecipe(idDrinks);
      setRecipe(info[0])
    }
  }

  const teste = async (e) => {
    if (path.includes('foods')) {
      const ingredients = Object.values(recipe).slice(9, 29)
      .filter((elt) => elt !== null && elt !== '')
      const limit = ingredients.length
      e.target.checked ? setCont(cont + 1) : setCont(cont - 1)
      cont === limit - 1 ? setButtonDisabled(false) : setButtonDisabled(true)
    }
  }

  useEffect(() => {
    const getRecipe = async () => {
      await getFoodInfo();
    }

    getRecipe().catch(console.error);
  }, [])

  return (
    <MainProgress>
      <h1>In Progress</h1>
      <h4>{recipe.strMeal || recipe.strDrink}</h4>
      { recipe.strMeal ?
        <p>{recipe.strArea} - {recipe.strCategory}</p>
      : <p>{recipe.strCategory}</p> }
      <img src={recipe.strDrinkThumb || recipe.strMealThumb} alt="" width="250px" />
      <h5>Ingredients</h5>
      <DivIngredients>
        { recipe.idMeal && Object.values(recipe).slice(9, 29)
        .filter((elt) => elt !== null && elt !== '').map((it, i) => (
            <Checkbox key={i}>
              <label>
                <input type="checkbox" name={ it } onClick={ (e) => teste(e)} />
                { it }
              </label>
            </Checkbox>
          ))}
      </DivIngredients>
      <DivIngredients>
        { recipe.idDrink && Object.values(recipe).slice(21, 35)
        .filter((elt) => elt !== null && elt !== '').map((it, i) => (
            <Checkbox key={i} onClick={ (e) => teste(e)}>
              <label>
                <input type="checkbox" name={ it } />
                { it }
              </label>
            </Checkbox>
          ))}
      </DivIngredients>
      <h5>Step-by-Step</h5>
      <p>{recipe.strInstructions}</p>
      <StartButton onClick={ () => path.includes('drinks') ? history.push('/drinks') : history.push('/foods') } disabled={buttonDisabled}>Finish Recipe</StartButton>
    </MainProgress>
  )
}

export default RecipeInProgress