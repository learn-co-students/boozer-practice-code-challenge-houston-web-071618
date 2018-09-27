import React from "react";

const Cocktail = props => {
  return (
    <li onClick={e => props.handleCocktailClick(props.cocktail)}>
      <a href="#">{props.name}</a>
    </li>
  );
};

export default Cocktail;
