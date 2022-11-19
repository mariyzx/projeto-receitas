import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globalStyles";
import { FaToggleOff, FaToggleOn } from 'react-icons/fa';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Recipes from './pages/Recipes';

import { lightTheme, darkTheme } from './components/Themes';
import Profile from "./pages/Profile";
import RecipeDetails from "./pages/RecipeDetails";
import { ToggleButton } from "./styles/Buttons";

function App() {
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

    return (
      <Switch>
        <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme }>
          <ToggleButton onClick={ () => themeToggler()}>
            { theme === 'light' ? <FaToggleOff /> : <FaToggleOn color="white" /> }
          </ToggleButton>
            <Route exact path="/" component={Home} />
            <Route exact path="/foods" component={Recipes} />
            <Route exact path="/foods/:idMeals" component={RecipeDetails} />
            <Route exact path="/drinks" component={Recipes} />
            <Route exact path="/drinks/:idDrinks" component={RecipeDetails} />
            <Route exact path="/profile" component={Profile} />
        <GlobalStyles />
        </ThemeProvider>
      </Switch>
    );
}

export default App;
