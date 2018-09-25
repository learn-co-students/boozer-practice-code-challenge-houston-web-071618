import React, { Component } from "react";
import CocktailsList from "./CocktailsList";
import CocktailDisplay from "./CocktailDisplay";
import Form from "./Form";
const COCKTAILS_URL =
  "https://react-boozer-backend.herokuapp.com/api/v1/cocktails";
const INGRE_URL = "https://react-boozer-backend.herokuapp.com/api/v1/ingredients";
const PRO_URL = "https://react-boozer-backend.herokuapp.com/api/v1/proportions";

class CocktailsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cocktails: [],
      ingredients: null,
      proportions: null,
      currentCocktail: null
    };

    this.fetchCocktails();
    this.fetchIngredients();
    this.fetchProportions();
    //debugger

    this.handleClick = this.handleClick.bind(this);

  }

  fetchCocktails() {
    fetch(COCKTAILS_URL)
      .then(resp => resp.json())
      .then(cocktails => this.setState({ cocktails: cocktails }));
  }

  fetchIngredients() {
    fetch(INGRE_URL)
      .then(resp => resp.json())
      .then(ingredients => this.setState({ ingredients }));
  }

  fetchProportions() {
    fetch(PRO_URL)
      .then(resp => resp.json())
      .then(proportions => this.setState({ proportions }));
  }

  handleClick = cocktail => {
    //debugger
    this.setState({ currentCocktail: cocktail });
  };

  addCocktail = (cocktail) => {
    const cocktails = [
      ...this.state.cocktails,
      cocktail
    ]
    this.setState({cocktails})
  }

  render() {
    //debugger
    return (
      <div>
        <div className="container">
          <CocktailsList
            cocktails={this.state.cocktails}
            selectedCocktail={this.state.currentCocktail}
            handleClick={this.handleClick}
          />
          {this.state.currentCocktail ? (
            <CocktailDisplay ingredients={this.state.ingredients} proportions={this.state.proportions} cocktail={this.state.currentCocktail} />
          ) : null}
          <Form cocktaillength={this.state.cocktails.length} newCocktail={this.addCocktail}/>
        </div>
      </div>
    );
  }
}

export default CocktailsContainer;
