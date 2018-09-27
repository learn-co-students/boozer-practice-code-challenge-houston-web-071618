import React, { Component } from "react";
import CocktailsList from "./CocktailsList";
import CocktailDisplay from "./CocktailDisplay";
import Form from "./Form";

const cocktailsURL = `https://react-boozer-backend.herokuapp.com/api/v1/cocktails`;

class CocktailsContainer extends Component {
  constructor() {
    super();
    this.state = {
      cocktails: [],
      loading: true,
      selectedCocktail: null
    };
  }

  componentDidMount() {
    //get all cocktails
    fetch(cocktailsURL)
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          cocktails: data,
          loading: false,
          selectedCocktail: data[0]
        })
      );
  }

  handleCocktailClick = cocktail => {
    // debugger;
    const cocktailURL = `${cocktailsURL}/${cocktail.id}`;

    fetch(cocktailURL)
      .then(resp => resp.json())
      .then(newCocktail =>
        this.setState({
          selectedCocktail: newCocktail
        })
      );
  };

  render() {
    console.log(this.state.selectedCocktail);
    return (
      <div>
        {this.state.loading ? (
          <div>Loading...</div>
        ) : (
          <div className="container">
            <CocktailsList
              cocktails={this.state.cocktails}
              handleCocktailClick={this.handleCocktailClick}
            />
            <CocktailDisplay selectedCocktail={this.state.selectedCocktail} />
            <Form />
          </div>
        )}
      </div>
    );
  }
}

export default CocktailsContainer;
