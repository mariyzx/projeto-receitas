import React from "react";
import { BiDrink } from 'react-icons/bi'
import { GiMeal } from 'react-icons/gi'
import { useHistory } from "react-router-dom";
import { FooterButton } from "../styles/components/Buttons";
import { DivFooter } from "../styles/components/Footer";


function Footer() {
  const history = useHistory();

  return (
    <DivFooter>
      <FooterButton type="button" onClick={ () => history.push('/drinks')}><BiDrink /></FooterButton>
      <FooterButton type="button" onClick={ () => history.push('/foods')}><GiMeal /></FooterButton>
    </DivFooter>
  )
}

export default Footer;