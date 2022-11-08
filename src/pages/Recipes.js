import React from "react";
import { useHistory } from "react-router-dom";
import Drinks from "../components/Drinks";
import Foods from "../components/Foods";
import Header from "../components/Header";

function Recipes() {
  const history = useHistory();
  return (
    <div>
      <Header />
      { (history.location.pathname === '/drinks') ? <Drinks /> : <Foods /> }
    </div>
  )
}

export default Recipes;