import React from "react";

const CocktailDisplay = ({ selectedCocktail }) => {
  return (
    <div>
      <div id="cocktail-display">
        <h1>{selectedCocktail.name}</h1>
        <h3>{selectedCocktail.description}</h3>
        <p>{selectedCocktail.instructions}</p>
        <h1>Ingredients</h1>
      </div>
      {selectedCocktail.proportions
        ? selectedCocktail.proportions.map(proportion => (
            <div id="ingredient-display">
              <h3>{proportion.amount}</h3>
              <p>{proportion.ingredient_name}</p>
            </div>
          ))
        : null}
    </div>
  );
};

export default CocktailDisplay;
