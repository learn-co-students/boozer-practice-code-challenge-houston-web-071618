import React from 'react'

const CocktailDisplay = (props) => {
	

	const ingredientsList = () => {
		let matchingProportions = props.proportions.filter(prop => (prop.cocktail_id === props.cocktail.id))
		// let final = matchingProportions.forEach(function(proportion) {
		 	//let matching = props.ingredients.find(ingredient => ingredient.id === proportion.ingredient_id);
		// 	return `${proportion.amount} of ${matching.name}`
		// })

		let finallist = [];

		for(let i = 0; i < matchingProportions.length; i++){
			let matching = props.ingredients.find(ingredient => ingredient.id === matchingProportions[i].ingredient_id);
			finallist.push(`${matchingProportions[i].amount} of ${matching.name}`)
		}

		return finallist
	
	}	


  return (
    <div id="cocktail-display">
      <h1>{props.cocktail.name}</h1>
      <h3>{props.cocktail.description}</h3>
      <p>{props.cocktail.instructions}</p>
      <h2>Ingredients</h2>
      {ingredientsList()}
    </div>
  )
}

export default CocktailDisplay
