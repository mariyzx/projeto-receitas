import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globalStyles";
import { FaToggleOff, FaToggleOn } from 'react-icons/fa';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Recipes from './pages/Recipes';
import { Button } from "./styles/ToggleButton";

import { lightTheme, darkTheme } from './components/Themes';

function App() {
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

    return (
      <Switch>
        <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme }>
          <Button onClick={ () => themeToggler()}>
            { theme === 'light' ? <FaToggleOff /> : <FaToggleOn color="white" /> }
          </Button>
            <Route exact path="/" component={Home} />
            <Route exact path="/foods" component={Recipes} />
            <Route exact path="/drinks" component={Recipes} />
        <GlobalStyles />
        </ThemeProvider>
      </Switch>
    );
}

export default App;
