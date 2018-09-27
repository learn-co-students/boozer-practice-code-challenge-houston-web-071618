import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    description: "",
    instructions: "",
    proportions: [{ ingredient: "", amount: "" }]
  };

  handleForm = e => {
    e.preventDefault();
    console.log("submit");
  };

  handleAddProportion = e => {
    e.preventDefault();
    this.setState(state => {
      state.proportions.push({ ingredient: "", amount: "" });
      return state;
    });
  };

  handleEditProportion = (index, key, value) => {
    this.setState(state => {
      state.proportions[index][key] = value;
      return state;
    });
  };

  handleInputUpdate = (key, value) => {
    this.setState({ [key]: value });
  };

  render() {
    console.log(this.state);
    return (
      <form>
        <h3>Create a Cocktail</h3>

        <p>Name</p>
        <input
          type="text"
          onInput={e => this.handleInputUpdate("name", e.target.value)}
        />

        <p>Description</p>
        <input
          type="text"
          onInput={e => this.handleInputUpdate("description", e.target.value)}
        />

        <p>Instructions</p>
        <input
          type="text"
          onInput={e => this.handleInputUpdate("instructions", e.target.value)}
        />

        <h3>Proportions</h3>
        <div className="">
          {this.state.proportions.map((proportion, index) => (
            <div>
              <p>
                Ingredient Name<br />
                <input
                  type="text"
                  onInput={e =>
                    this.handleEditProportion(
                      index,
                      "ingredient",
                      e.target.value
                    )
                  }
                />
              </p>
              <p>
                Quantity<br />
                <input
                  type="text"
                  onInput={e =>
                    this.handleEditProportion(index, "amount", e.target.value)
                  }
                />
              </p>
            </div>
          ))}
        </div>

        <p>
          <button onClick={e => this.handleAddProportion(e)}> + </button>
        </p>

        <input type="submit" onClick={e => this.handleForm(e)} />
      </form>
    );
  }
}

export default Form;
