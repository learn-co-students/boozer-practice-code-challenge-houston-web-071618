import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      description:"",
      instructions:"",
      proportions:[{
        ingredient_name:"",
        amount:""
      }]
    };
  }


  addProp =(e)=>{
    e.preventDefault();
    const newProportions = [...this.state.proportions]
    newProportions.push({ingredient_name:"",amount:""})
    this.setState({
      proportions:newProportions
    })
  }

  handleName = (index,name) =>{
    this.setState( state => {
      state.proportions[index]= { ...this.state.proportions[index], ingredient_name: name}
      return state
    })
  }

  handleQuantity = (index, quantity) =>{
    this.setState( state => {
      state.proportions[index]= { ...this.state.proportions[index], amount: quantity}
      return state
    })
  }



  render(){
    console.log(this.state.proportions)
    return (
      <form onSubmit={e=>this.props.addDrink(e,this.state)}>
        <h3>Create a Cocktail</h3>

        <p>Name</p>
        <input onChange={e=>this.setState({name:e.target.value})} type="text"/>

        <p>Description</p>
        <input onChange={e=>this.setState({description:e.target.value})} type="text"/>

        <p>Instructions</p>
        <input onChange={e=>this.setState({instructions:e.target.value})} type="text"/>

        <h3>Proportions</h3>

        {this.state.proportions.map((prop,index)=>{
          return(
            <div className="container" key={index}>
              <p>Ingredient Name<br/>
              <input type="text" onChange={e=>this.handleName(index,e.target.value)}/>
              </p>

              <p>Quantity<br/>
              <input type="text" onChange={e=>this.handleQuantity(index,e.target.value)}/>
              </p>
            </div>
          )
        })

        }


        <p><button onClick={e=>this.addProp(e)}> + </button></p>

        <input type="submit"/>
      </form>
    )
  }
}

export default Form
