import React from "react";

const Cocktail = ({ id, name, handleCocktailClick }) => {
  return (
    <li id={id} onClick={e => handleCocktailClick(e)}>
      {name}
    </li>
  );
};

export default Cocktail;
