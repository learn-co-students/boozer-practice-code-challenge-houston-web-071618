import React, { Component } from "react";

class CocktailForm extends Component {
  state = {
    name: "",
    description: "",
    instructions: "",
    ingredient_name: "",
    amount: "",
    proportions: []
  };

  handleInputChange = e => {
    const value = e.target.value;
    const element = e.target.name;
    this.setState({ [element]: value });
  };

  handleIngredientSubmit = e => {
    const { ingredient_name, amount } = this.state;
    const proportions = [...this.state.proportions];
    proportions.push({ ingredient_name, amount });
    this.setState({ proportions, ingredient_name: "", amount: "" });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { name, description, instructions, proportions } = this.state;
    this.props.handleFormSubmit({
      name,
      description,
      instructions,
      proportions,
      id: name,
      isLocal: true
    });
    this.setState({
      name: "",
      description: "",
      instructions: "",
      proportions: []
    });
  };

  render() {
    const proportions = this.state.proportions.map(
      ({ ingredient_name, amount }, index) => (
        <li key={index}>
          {ingredient_name} - {amount}
        </li>
      )
    );
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <h1>Create a Cocktail: </h1>
          <label htmlFor="name">Name: </label>
          <input
            onChange={e => this.handleInputChange(e)}
            type="text"
            name="name"
            value={this.state.name}
          />
          <br />
          <label htmlFor="description">Description: </label>
          <input
            onChange={e => this.handleInputChange(e)}
            type="text"
            name="description"
            value={this.state.description}
          />
          <br />
          <label htmlFor="instructions">Instructions: </label>
          <input
            onChange={e => this.handleInputChange(e)}
            type="text"
            name="instructions"
            value={this.state.instructions}
          />
          <br />
          <h2>Proportions: </h2>
          {this.state.proportions ? proportions : null}
          <input
            type="button"
            onClick={this.handleIngredientSubmit}
            value="Add Ingredient"
          />
          <br />
          <label htmlFor="ingredient_name">Ingredient: </label>
          <input
            onChange={this.handleInputChange}
            type="text"
            name="ingredient_name"
            value={this.state.ingredient_name}
          />
          <br />
          <label htmlFor="amount">Amount: </label>
          <input
            onChange={this.handleInputChange}
            type="text"
            name="amount"
            value={this.state.amount}
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CocktailForm;
