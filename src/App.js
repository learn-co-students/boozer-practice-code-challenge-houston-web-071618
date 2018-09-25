import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CocktailsContainer from './components/CocktailsContainer'
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <CocktailsContainer />
    );
  }
}

export default App;
