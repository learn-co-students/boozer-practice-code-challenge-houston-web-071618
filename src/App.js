import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CocktailsContainer from './components/CocktailsContainer'

class App extends Component {
  state={
    drinks:[],
    loading:true
  }

addDrink =(e,drink) =>{
  e.preventDefault();
  let newDrinks =[...this.state.drinks, drink]
  newDrinks= newDrinks.sort((a,b) =>{
    if(a.name>b.name){
      return 1
    }
    else if (a.name<b.name) {
      return -1
    }
    else{
      return 0
    }
  })
  this.setState({
    drinks:newDrinks
  })
}


  render() {
    console.log(this.state)
    return (
      <div>
        {this.state.loading ? <h1>Loading...</h1> : <CocktailsContainer drinks={this.state.drinks} addDrink={this.addDrink}/>}
      </div>
    );
  }

  componentDidMount(){
    fetch("https://react-boozer-backend.herokuapp.com/api/v1/cocktails")
    .then(res=>res.json())
    .then(data =>this.setState({drinks:data, loading:false}) )
  }
}

export default App;
