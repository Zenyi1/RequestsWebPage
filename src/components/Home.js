import React, { Component } from 'react'
import Cards from './Cards'
import Navbar from './Navbar'
import axios from 'axios'

class Home extends Component {
    constructor(props){
    super(props);
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


updateCardAlumno() {
    if(this.state.alumnos.length == 0) {
      return <div>Cargando...</div>
    } else {
      return this.state.alumnos.map(element => {
      return <Cards nombre={element.nombre} apellidos={element.apellidos}/>
    })
  }
  }

  render() {
      return (
        <div className="App">
        <Navbar/>            
            {this.updateCardAlumno()}
       </div>
      );
  }
}
  export default Home
