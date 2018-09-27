import React, { Component } from "react";
import Cocktail from "./Cocktail";

const CocktailsList = ({ cocktails, handleCocktailClick }) => {
  //map through cocktails
  const cocktailList = cocktails.map(cocktail => (
    <Cocktail
      cocktail={cocktail}
      key={cocktail.id}
      name={cocktail.name}
      description={cocktail.description}
      handleCocktailClick={handleCocktailClick}
    />
  ));
  return <div id="cocktail-list">{cocktailList}</div>;
};

// class CocktailsList extends Component {
//   render() {
//     return (
//       <div id="cocktail-list">
//         <Cocktail />
//       </div>
//     );
//   }
// }

export default CocktailsList;
