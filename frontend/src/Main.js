import React, { Component } from 'react';
import './Global.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RaisedButton, TextField, SelectField, MenuItem,Table,TableRowColumn,TableHeaderColumn,TableBody,TableHeader,TableRow} from 'material-ui';
import Home from './Home';
import Login from './Login';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {auth_token: null};
  }

  onLogin = auth_token => {
    this.setState({auth_token: auth_token["auth_token"]});
 console.warn(auth_token);
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
        {this.state.auth_token ? <Home auth_token={this.state.auth_token}/> : <Login onLogin={this.onLogin}/>}
        </MuiThemeProvider>
      </div>
    )
  }
}
