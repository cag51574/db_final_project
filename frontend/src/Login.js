import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './Global.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Dialog, Tabs, Tab, RaisedButton, TextField, SelectField, MenuItem,Table, TableRowColumn,TableHeaderColumn,TableBody,TableHeader,TableRow} from 'material-ui';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      full_name: "",
      password: "",
      error: ""
    }
  }

  login(email, password) {
    fetch("http://localhost:9000/login/" + email + "/" + password)
      .then(response => {
        if (response.status === 200) {
          this.props.onLogin(response.body);
        } else {
          this.setState({error: response.statusText});
        }
      })
      .catch(e => this.setState({error: e.message}));
  }

  signup = (email, password, full_name) => {
    fetch("http://localhost:9000/signup/" + email + "/" + password + "/" + full_name)
      .then(response => {
        if (response.status === 200) {
          this.props.onLogin(response.body);
        } else {
          this.setState({error: response.statusText});
        }
      })
      .catch(e => this.setState({error: e.message}));
  }


  render() {
    return (
        <div className="Login">
        {this.state.error}
        <Tabs>
        <Tab label="Login">
        <div className='FormRow'>
        <form onSubmit={this.createRestaurant}>
        <TextField floatingLabelText="Email: " floatingLabelFixed={true}
      onChange={(e) => this.setState({email: e.target.value})} name='email'/>
        <br/>
        <TextField floatingLabelText="Password: " floatingLabelFixed={true}
      onChange={(e) => this.setState({password: e.target.value})} type="password" name="password"/>
        <br/>
        <RaisedButton label="Login" primary={true} onClick={_ => this.login(this.state.email, this.state.password)} />
        </form>
        </div>

        </Tab>
        <Tab label="Sign Up">
        <div className='FormRow'>
        <form onSubmit={this.createRestaurant}>
        <TextField floatingLabelText="Email: " floatingLabelFixed={true}
      onChange={(e) => this.setState({email: e.target.value})} name='email'/>
        <br/>
        <TextField floatingLabelText="Full Name: " floatingLabelFixed={true}
      onChange={(e) => this.setState({full_name: e.target.value})} name='full_name'/>
        <br/>
        <TextField floatingLabelText="Password: " floatingLabelFixed={true}
      onChange={e => this.setState({password: e.target.value})} type="password" name="password"/>
        <br/>
        <RaisedButton label="Sign Up" primary={true} onClick={_ => this.signup(this.state.email, this.state.password, this.state.full_name)} />
        </form>
        </div>


        </Tab>
        </Tabs>

        </div>

    )
  }
}



