import React, { Component } from "react";
import IngredientForm from "./IngredientForm";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      proportions: 1
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { _name, _description, _instructions } = this.refs
    let newcocktail = {
      id: this.props.cocktaillength+1,
      name: _name.value,
      description: _description.value,
      instructions: _instructions.value
    };
    //debugger
    //console.log(this.props.newCocktail)
    this.props.newCocktail(newcocktail)
    //debugger
    // let newcocktail = {

    // }
  };

  handleClick = e => {
    e.preventDefault();
    this.setState({ proportions: this.state.proportions + 1 });
  };

  render() {
    let forms = [];
    for (let i = 0; i < this.state.proportions; i++) {
      forms.push(<IngredientForm />);
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Create a Cocktail</h3>

        <p>Name</p>
        <input type="text" ref="_name"/>

        <p>Description</p>
        <input type="text" ref="_description"/>

        <p>Instructions</p>
        <input type="text" ref="_instructions"/>

        <h3>Proportions</h3>
        {forms}

        <p>
          <button onClick={this.handleClick}> + </button>
        </p>

        <input type="submit" />
      </form>
    );
  }
}

export default Form;
