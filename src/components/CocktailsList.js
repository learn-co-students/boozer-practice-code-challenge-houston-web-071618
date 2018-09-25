import React, { Component } from "react";
import Cocktail from "./Cocktail";

class CocktailsList extends Component {
  constructor() {
    super();
  }

  render() {
    //debugger
    return (
      //debugger
      <div id="cocktail-list">
        {this.props.cocktails.length === 0
          ? "Loading"
          : this.props.cocktails.map((cocktail, i) => (
              <Cocktail
                cocktail={cocktail}
                key={i}
                handleClick={this.props.handleClick}
              />
            ))}
      </div>
    );
  }
}

export default CocktailsList;
