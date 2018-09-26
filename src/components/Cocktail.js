import React from 'react'

const Cocktail = (props) => {
  return (
    <li onClick={e => props.updateCurrentCocktail(props.cocktail)}>{props.cocktail.name}</li>
  )
}

export default Cocktail
