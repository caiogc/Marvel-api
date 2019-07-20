import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Card from './components/card';

const md5 = require('md5');

const publicKey = 'b73177e4b76c96a05fadca1c27e70cad';
const privateKey= '9d4166c5a1f5d73a88b45cfa1e8a24a5c158255a';
const timeStamp = Date.now().toString();

const hash = md5(timeStamp + privateKey + publicKey);

class App extends Component {

  state = {
    heroes:[]
  }

async componentDidMount () {
const result = await axios.get (`https://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`)
.then((res) => { 
  return res.data;
})
.catch ((error) => {
  return error;
})
const heroes = result.data.results;
console.log(heroes);

this.setState({ heroes });
}
  render () {
  return (
    <div className="App">
     {
       this.state.heroes.map ((hero ) =>(
         <Card heroItem={hero} />   
    
       ) )
     }
    </div>
   );
}
}
export default App;
