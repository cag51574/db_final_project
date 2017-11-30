import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './Global.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Dialog, Tabs, Tab, RaisedButton, TextField, SelectField, MenuItem,Table,TableRowColumn,TableHeaderColumn,TableBody,TableHeader,TableRow} from 'material-ui';
import Owner from './Owner';
import Customer from './Customer';


export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Tabs>
        <Tab label="Order">
        <Customer auth_token={this.props.auth_token} />
        </Tab>
        <Tab label="Manage">
        <Owner auth_token={this.props.auth_token} />
        </Tab>
        </Tabs>
    )
  }
}

