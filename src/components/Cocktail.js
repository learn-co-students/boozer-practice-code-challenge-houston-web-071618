import React from 'react'

const Cocktail = (props) => {


  return (
    <div>
    <li onClick={cocktail => props.handleClick(props.cocktail)}>
    	{props.cocktail.name}
    </li>
    </div>
  )
}

export default Cocktail
