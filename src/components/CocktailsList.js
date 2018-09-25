import React, { Component } from "react";
import Cocktail from "./Cocktail";

class CocktailsList extends Component {
  render() {
    const cocktails = this.props.cocktails.map(({ name, id }) => (
      <Cocktail
        key={id}
        name={name}
        id={id}
        handleCocktailClick={this.props.handleCocktailClick}
      />
    ));

    return <div id="cocktail-list">{cocktails}</div>;
  }
}

export default CocktailsList;
