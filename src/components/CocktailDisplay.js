import React from 'react'

const CocktailDisplay = (props) => {

  const setProportions = () =>{
    return(props.drink.proportions.map(proportion => <p><span>- {proportion.amount}</span>  {proportion.ingredient_name}</p>))
  }

  return (
    <div>
      { props.drink === null ? null :(
        <div id="cocktail-display">
          <h1>{props.drink.name}</h1>
          <h3>{props.drink.description}</h3>
          <p>{props.drink.instructions}</p>
          {setProportions()}
        </div>
      )
      }
    </div>
  )
}

export default CocktailDisplay
