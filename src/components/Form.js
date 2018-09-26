import React, { Component } from 'react'

class Form extends Component {

  state = {
    name: '',
    description: '',
    Instructions: '',
    proportions: [{ amount: '', ingredient_name: '' }]
  }

  updateProportionField = (index, field, event) => {
    let value = event.target.value
    this.setState(state => {
      state.proportions[index][field] = value
      return state
    })
  }



  addProportions = () => {
    return this.state.proportions.map((proportion, index) => {
      return (
        <div className="container">
          <p>Ingredient Name<br />
            <input type="text" onInput={e => this.updateProportionField(index, 'ingredient_name', e)} />
          </p>
          <p>Quantity<br />
            <input type="text" onInput={e => this.updateProportionField(index, 'amount', e)} />
          </p>
        </div>
      )
    })
  }

  handleAddProportionButton = () => {
    this.setState(state => {
      state.proportions.push({ amount: '', ingredient_name: '' })
      return state
    })
  }


  updateFormFields = (field, event) => {
    let value = event.target.value
    this.setState(state => {
      state[field] = value
      return state
    })
  }

  render() {
    // console.log(this.state)
    return (
      <form onSubmit={e => e.preventDefault()} >
        <h3>Create a Cocktail</h3>

        <p>Name</p>
        <input type="text" onInput={e => this.updateFormFields('name', e)} />

        <p>Description</p>
        <input type="text" onInput={e => this.updateFormFields('description', e)} />

        <p>Instructions</p>
        <input type="text" onInput={e => this.updateFormFields('instructions', e)} />

        <h3>Proportions</h3>

        {this.addProportions()}

        <p><button onClick={this.handleAddProportionButton}> + </button></p>

        <input type="submit" onClick={this.handleFormSubmit} />
      </form >
    )
  }

  handleFormSubmit = (e) => {

    console.log(this.state)
    this.props.updateCurrentCocktail(this.state)
  }
}

export default Form
