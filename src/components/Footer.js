import React from "react";
import { BiDrink } from 'react-icons/bi'
import { GiMeal } from 'react-icons/gi'
import { useHistory } from "react-router-dom";
import { DivFooter } from "../styles/Footer";


function Footer() {
  const history = useHistory();

  return (
    <DivFooter>
      <button type="button" onClick={ () => history.push('/drinks')}><BiDrink /></button>
      <button type="button" onClick={ () => history.push('/foods')}><GiMeal /></button>
    </DivFooter>
  )
}

export default Footer;