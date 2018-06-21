import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Cards from './components/Cards'
import Navbar from './components/Navbar'
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'


class App extends Component {

constructor(){
  super();
  this.state = {
    saludo:"Bienvenido a Alumnos",
    despedida:"Gracias por visitar alumnos",
    alumnos:[]
  }
}


componentDidMount() {
  axios.get('https://backendtestzenyi1.herokuapp.com/api/v1/alumnos')
  .then(response => {
    this.setState({
      alumnos:response.data
  })
  })

  .catch(err => console.log(err))
}


  render() {
    return (
  
     /* 
      <div className="App">
      <Navbar/>            
          {this.updateCardAlumno()}
     </div>
     */
      <BrowserRouter>
      <main>
        <Route exact path="/" component = {Navbar}/>
        <Route exact path="/content" component = {Cards}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home}/>

      </main>
      </BrowserRouter>
      
    );
  }

}
export default App;
