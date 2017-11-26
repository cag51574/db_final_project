import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './Global.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RaisedButton, TextField, SelectField, MenuItem} from 'material-ui';

export default class Owner extends Component{
  state = {
      value: 1,
  };

  handleChange = (event,index,value) => this.setState({value});

  render() {
    return(
      <MuiThemeProvider>
      <div className="DocBody">
        <h1>Owner Homepage</h1>
        <div className='FormRow'>

        <div className = "FormBox">
          <h2>Create Restaurant</h2>
          <TextField floatingLabelText="Restaurant Name: " floatingLabelFixed={true} />
          <br/>
          <TextField floatingLabelText="Restaurant Location: " floatingLabelFixed={true} />
          <br/>
          <TextField floatingLabelText="Restaurant Phone Number: " floatingLabelFixed={true} />
          <br/>
          <TextField floatingLabelText="Owner Name: " floatingLabelFixed={true} />
          <br/>
          <RaisedButton label="Submit" primary={true}/>
        </div>

        <div className = "FormBox">
          <h2>Create Menu</h2>
          <SelectField floatingLabelText="Restaurant Name: "
            value={this.state.value}
            onChange={this.handleChange}>
            <MenuItem value={1} primaryText="Import List" />
            <MenuItem value={2} primaryText="Import List 2" />
          </SelectField>
          <br/>
          <TextField floatingLabelText="Restaurant Location: " floatingLabelFixed={true} />
          <br/>
          <TextField floatingLabelText="Restaurant Phone Number: " floatingLabelFixed={true} />
          <br/>
          <TextField floatingLabelText="Owner Name: " floatingLabelFixed={true} />
          <br/>
          <RaisedButton label="Submit" primary={true}/>
        </div>

        <div className = "FormBox">
          <h2>Create Menu</h2>
          <TextField floatingLabelText="Restaurant Name: " floatingLabelFixed={true} />
          <br/>
          <TextField floatingLabelText="Restaurant Location: " floatingLabelFixed={true} />
          <br/>
          <TextField floatingLabelText="Restaurant Phone Number: " floatingLabelFixed={true} />
          <br/>
          <TextField floatingLabelText="Owner Name: " floatingLabelFixed={true} />
          <br/>
          <RaisedButton label="Submit" primary={true}/>
        </div>

        </div>
      </div>
      </MuiThemeProvider>
    )
  }
}
