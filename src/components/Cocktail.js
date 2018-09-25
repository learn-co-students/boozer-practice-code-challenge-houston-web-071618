import React from 'react'

const Cocktail = (props) => {
  return (
    <li id="drink">
      <span onClick={e => props.changeSelectedDrink(props.drink)}> {props.drink.name}</span>
    </li>
  )
}

export default Cocktail
