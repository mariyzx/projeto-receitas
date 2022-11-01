import React, { Component } from 'react';
import Home from './components/Home';
import { Container } from './styles/Login';

class App extends Component {
  render() {
    return (
      <Container>
        <Home />
      </Container>
    );
  }
}

export default App;
