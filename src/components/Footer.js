import React from "react";
import { BiDrink } from 'react-icons/bi'
import { GiMeal } from 'react-icons/gi'
import { DivFooter } from "../styles/Footer";


function Footer() {
  return (
    <DivFooter>
      <button type="button"><BiDrink /></button>
      <button type="button"><GiMeal /></button>
    </DivFooter>
  )
}

export default Footer;