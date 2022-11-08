import React from "react";
import { useHistory } from "react-router-dom";
import Drinks from "../components/Drinks";
import Foods from "../components/Foods";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Recipes() {
  const history = useHistory();
  return (
    <div>
      <Header />
      { (history.location.pathname === '/drinks') ? <Drinks /> : <Foods /> }
      <Footer />
    </div>
  )
}

export default Recipes;