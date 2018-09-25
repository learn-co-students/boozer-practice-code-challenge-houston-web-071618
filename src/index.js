import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

//Cocktails: https://react-boozer-backend.herokuapp.com/api/v1/cocktails

// Ingredients: https://react-boozer-backend.herokuapp.com/api/v1/ingredients

// Proportions: https://react-boozer-backend.herokuapp.com/api/v1/proportions

//ingredient: mint leaves, bitters
//proportion: join table, ingredient and amount for a certain cocktail