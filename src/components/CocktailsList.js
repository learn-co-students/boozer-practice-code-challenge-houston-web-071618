import React, { Component } from 'react'
import Cocktail from './Cocktail'

class CocktailsList extends Component {

  handleCocktails = () => (
    this.props.cocktails.map(cocktail => (
      <Cocktail cocktail={cocktail} key={cocktail.id} updateCurrentCocktail={this.props.updateCurrentCocktail} />
    ))
  )


  render() {
    return (
      <div id="cocktail-list">
        <ul>{this.handleCocktails()}</ul>

      </div>
    )
  }
}

export default CocktailsList
