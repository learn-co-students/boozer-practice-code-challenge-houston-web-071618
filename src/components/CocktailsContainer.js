import React, { Component } from 'react'
import CocktailsList from './CocktailsList'
import CocktailDisplay from './CocktailDisplay'
import Form from './Form'

class CocktailsContainer extends Component {

  constructor() {
    super()

    this.state = {
      cocktails: [],
      currentCocktails: null

    }

    this.fetchCocktails();
  }

  updateCurrentCocktail = (cocktail) => {
    // debugger
    if (cocktail.id) {
      fetch(`https://react-boozer-backend.herokuapp.com/api/v1/cocktails/${cocktail.id}`)
        .then(resp => resp.json())
        .then(cocktail => this.setState({
          currentCocktails: cocktail
        }))
    } else if (cocktail) {
      this.setState(state => {
        state.cocktails.push(state)
        state.currentCocktails = cocktail
        return state
      })
    }

  }


  fetchCocktails = () => {
    fetch('https://react-boozer-backend.herokuapp.com/api/v1/cocktails')
      .then(resp => resp.json())
      .then(cocktails => this.setState({ cocktails: cocktails }))
  }




  render() {
    return (
      <div className="container" >
        <CocktailsList cocktails={this.state.cocktails} updateCurrentCocktail={this.updateCurrentCocktail} />
        <CocktailDisplay currentCocktails={this.state.currentCocktails} />
        <Form updateCurrentCocktail={this.updateCurrentCocktail} />
      </div>
    )
  }
}

export default CocktailsContainer
