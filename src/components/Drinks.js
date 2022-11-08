import React, { useContext } from "react";
import Context from "../context/Context";
import { MainRecipe, CardRecipe, StyledLink } from '../styles/Recipes';

function Drinks() {
  const { drinks } = useContext(Context);
  return (
    <MainRecipe>
      { drinks.drinks && drinks.drinks.map((drink, id) => (
          <StyledLink key={id} to={`/drinks/${drink.idDrink}`}>
            <CardRecipe>
                <h5>{drink.strDrink}</h5>
                <img
                  width="250px"
                  src={drink.strDrinkThumb} />
            </CardRecipe>
          </StyledLink>
        ))
      }
      {(drinks.drinks === null ? <h5>Sorry, drink not found!</h5> : null)}
    </MainRecipe>
  )
}

export default Drinks;