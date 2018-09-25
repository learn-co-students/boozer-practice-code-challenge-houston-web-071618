import React, { Component } from 'react'
import CocktailsList from './CocktailsList'
import CocktailDisplay from './CocktailDisplay'
import Cocktail from './Cocktail'
import '../index.css';
import Form from './Form'

export default class CocktailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDrink:null
    };
  }

  changeSelectedDrink = (drink) =>{
    if(drink.id !== undefined){
      fetch(`https://react-boozer-backend.herokuapp.com/api/v1/cocktails/${drink.id}`)
      .then(res=>res.json())
      .then(data => this.setState({selectedDrink:data}))
    }
    else{
      this.setState({selectedDrink:drink})
    }
  }

  render(){
    return (
      <div className="container">
        <div className="allDrinks">
          <ul>
            {this.props.drinks.map(drink =>(<Cocktail key={drink.id} drink={drink} changeSelectedDrink={this.changeSelectedDrink}/>))}
          </ul>
        </div>

        <div>
          <CocktailDisplay drink = {this.state.selectedDrink}/>
        </div>

        <div>
          <Form addDrink={this.props.addDrink}/>
        </div>

      </div>
    )
  }
}
