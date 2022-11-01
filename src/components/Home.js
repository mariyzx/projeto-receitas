import React, { useState } from "react";
import { FaToggleOff, FaToggleOn } from 'react-icons/fa';
import { ThemeProvider } from "styled-components";
import Login from '../pages/Login';
import { GlobalStyles } from "../styles/globalStyles";
import { Button } from "../styles/ToggleButton";

import { lightTheme, darkTheme } from './Themes';

const Home = () => {
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme }>
      <Button onClick={ () => themeToggler()}>
        { theme === 'light' ? <FaToggleOff /> : <FaToggleOn color="white" /> }
      </Button>
      <Login />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default Home;