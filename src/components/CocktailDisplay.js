import React from "react";

const CocktailDisplay = ({
  cocktail: { name, description, instructions, proportions }
}) => {
  const proportionsList = proportions.map(({ id, ingredient_name, amount }) => (
    <li key={id}>
      {ingredient_name} {amount}
    </li>
  ));

  return (
    <div id="cocktail-display">
      <h1>{name}</h1>
      <h3>{description}</h3>
      <p>{instructions}</p>
      <ul>{proportionsList}</ul>
    </div>
  );
};

export default CocktailDisplay;
