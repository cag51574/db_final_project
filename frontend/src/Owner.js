import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './Global.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RaisedButton, TextField, SelectField, MenuItem} from 'material-ui';

export default class Owner extends Component{
  componentDidMount() {
    fetch("http://localhost:9000/restaurants")
      .then(response => {
        //do something with response
        response.json().then(restaurants => {
          this.setState({ restaurants: restaurants });
        });
      })
      .catch(err => {
        console.warn('ERROR');
      });
  }

  createRestaurant() {
    fetch("https://localhost:9000/restaurants/new"),{
      method:'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body:{
        restaurant_name: 'Example',
        location: 'ex location',
        owner_fname: 'Bob',
        owner_lname: 'Smith',
        restaurant_phone: 7067665740
      }
    }
  }

  constructor(props){
      super(props);
      this.state = {
        restaurants:[]
      };
  }

  /*state = {
      value: 1,
  };*/

  handleChange = (event,index,value) => this.setState({value});

  render() {
    return(
      <MuiThemeProvider>
      <div>
        {this.state ? JSON.stringify(this.state.restaurants) : "No State Yet."}
      </div>
      <p>break</p>
      <div>
        {this.state.restaurants.map(restaurant => restaurant.r_name)}
      </div>
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
          <TextField floatingLabelText="Owner's First Name: " floatingLabelFixed={true} />
          <br/>
          <TextField floatingLabelText="Owner's Last Name: " floatingLabelFixed={true} />
          <br/>
          <r_RaisedButton label="Submit" primary={true}/>
        </div>

        <div className = "FormBox">
          <h2>Add Menu Item</h2>

          <SelectField floatingLabelText="Restaurant Name: " floatingLabelFixed={true}
value={this.state.value}
            onChange={this.handleChange}>
            {this.state.restaurants.map(restaurant => {
                return(<MenuItem value={restaurant.r_name} primaryText={restaurant.r_name}/>)
            })}
            <MenuItem value={2} primaryText="Import List 2" />
          </SelectField>
          <br/>
          <TextField floatingLabelText="Menu Item: " floatingLabelFixed={true} />
          <br/>
          <TextField floatingLabelText="Price: " floatingLabelFixed={true} />
          <br/>
          <RaisedButton label="Submit" primary={true}/>
        </div>
        </div>

        <div className = "FormBox">
          <h2>Add Menu Item Ingreidient</h2>

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
          <h2>Edit Menu Item Recepie</h2>
          <SelectField floatingLabelText="Restaurant Name: "
            value={this.state.value}
            onChange={this.handleChange}>
            <MenuItem value={1} primaryText="Import List" />
            <MenuItem value={2} primaryText="Import List 2" />
          </SelectField>
        </div>

      </div>
      </MuiThemeProvider>
    )
  }
}
