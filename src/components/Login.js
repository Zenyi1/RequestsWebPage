import React, {Component} from 'react'
import axios from 'axios'

class Login extends Component {

    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            nombre:undefined,
            apellidos:undefined,
            edad:undefined
        }
    }

    onSubmit = (e) => {
        e.preventDefault()
        console.log('Desde el submit',this.state)
        var json = {
            nombre: this.state.nombre,
            apellidos:this.state.apellidos,
            edad:this.state.edad
        }
        axios.post('https://backendtestzenyi1.herokuapp.com/api/v1/user/create',json).then(alumno => {
            console.log(alumno)
            alert('Usuario Guardado')
        }).catch(err => {
            console.log(err)
            alert("Lo siento existe un problema")
        })
    }

    onInputChange = (e) => {
        
        if(e.target.name == 'nombre' ){
            this.setState({
                nombre: e.target.value
            })
        }else if (e.target.name == 'apellido'){
            this.setState({
                apellidos: e.target.value
            })
        }else if (e.target.name == 'edad'){
            this.setState({
                edad: e.target.value
            })
        }

    }


    
    render() {
            console.log(this.state)
        return (
            
            <form onSubmit={this.onSubmit}>
            <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
            <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script>
            <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
          <head>Register</head>
            
            <div className="container">
                    <div className="row centered-form">
                    <div className="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                    <h3 className="panel-title">Please sign up your student <small></small></h3>
                                     </div>
                                     <div className="panel-body">
                                    <form role="form">
                                        <div className="row">
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="form-group">
                                        <input type="text" name="nombre" id="name" className="form-control input-sm" placeholder="Student Name"
                                        onChange={this.onInputChange}
                                        ></input>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                            <form onSubmit={this.onSubmit}>
                                                <div className="form-group">
                                                    <input type="text" name="apellido" id="last_names" className="form-control input-sm" placeholder="Student Last Name"
                                                    onChange={this.onInputChange}
                                                    ></input>
                                                </div>
                                            
                                            </form>
                                        </div>
            
                                        <div className="form-group">
                                            <input type="number" name="edad" id="age" className="form-control input-sm" placeholder="User Age"
                                            onChange={this.onInputChange}
                                            ></input>
                                        </div>
            
                                        <div className="row">
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                
                                            </div>
                                        </div>
                                        
                                        <input type="submit" value="Submit" className="btn btn-info btn-block"/>
                                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </form>
        );
    }
    }

export default Login