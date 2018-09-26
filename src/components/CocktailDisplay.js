import React from 'react'


const handleCocktail = (props) => {
  let cocktail = props.currentCocktails

  function proportions() {
    return (cocktail.proportions.map(proportion => (<li>{proportion.amount}-{proportion.ingredient_name}</li>)))
  }

  if (props.currentCocktails) {
    return (
      <div id="cocktail-display">
        <h1>{cocktail.name}</h1>
        <h3>{cocktail.description}</h3>
        <p>{cocktail.instructions}</p>
        <h2>Ingredients</h2>
        <ul>{proportions()}</ul>
      </div>
    )
  } else {
    return (
      <div id="cocktail-display">
        <h1>Select a Cocktail to View Details</h1>
      </div>
    )
  }
}

const CocktailDisplay = (props) => {

  return (handleCocktail(props))
}

export default CocktailDisplay
