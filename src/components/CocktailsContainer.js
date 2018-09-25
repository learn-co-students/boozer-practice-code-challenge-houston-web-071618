import React, { Component } from "react";
import CocktailsList from "./CocktailsList";
import CocktailDisplay from "./CocktailDisplay";
import CocktailForm from "./CocktailForm";

class CocktailsContainer extends Component {
  state = {
    loading: true,
    cocktails: [],
    displayCocktail: null
  };

  componentDidMount() {
    fetch("https://react-boozer-backend.herokuapp.com/api/v1/cocktails")
      .then(response => response.json())
      .then(cocktails => this.setState({ cocktails, loading: false }));
  }

  handleCocktailClick = ({ target: { id } }) => {
    const selectedCocktail = this.state.cocktails.find(
      cocktail => cocktail.id == id
    );

    if (selectedCocktail.isLocal) {
      return this.setState({ displayCocktail: selectedCocktail });
    }

    fetch(`https://react-boozer-backend.herokuapp.com/api/v1/cocktails/${id}`)
      .then(response => response.json())
      .then(displayCocktail => this.setState({ displayCocktail }));
  };

  handleFormSubmit = cocktail => {
    const cocktails = [...this.state.cocktails, cocktail];
    this.setState({ cocktails });
  };

  render() {
    const loading = <h1>Loading...</h1>;
    return (
      <div className="container">
        {this.state.loading ? (
          loading
        ) : (
          <CocktailsList
            cocktails={this.state.cocktails}
            handleCocktailClick={this.handleCocktailClick}
          />
        )}
        {this.state.displayCocktail ? (
          <CocktailDisplay cocktail={this.state.displayCocktail} />
        ) : null}
        <CocktailForm handleFormSubmit={this.handleFormSubmit} />
      </div>
    );
  }
}

export default CocktailsContainer;
