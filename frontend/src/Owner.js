import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './Global.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RaisedButton, TextField, SelectField, MenuItem,Table,TableRowColumn,TableHeaderColumn,TableBody,TableHeader,TableRow} from 'material-ui';

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

<<<<<<< HEAD
  //create restaurant
  createRestaurant() {
    fetch("https://localhost:9000/restaurants/new"),{
=======
  createRestaurant(name, location, fname, lname, phone) {
    fetch("https://localhost:9000/new_restaurant"),{
>>>>>>> 6cf0abc04f5aa77e43ffcd09445449e28a63520f
      method:'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body:{
        restaurant_name: name,
        location: location,
        owner_first_name: lname,
        owner_last_name: fname,
        restaurant_phone: phone
      }
    }
  }

  //delete restaurant
  deleteRestaurant(){
    fetch(),{
      method:'POST',
      headers:{
        'Accept': 'application.json',
        'Content-Type': 'application.json',
      },
      body:{
        restaurant_name: this.state.selectRest
      }
    }
  }

  constructor(props){
      super(props);
      this.state = {
        restaurants:[],
        selected: [],
        selectRest: 1
      };
  }

  /*state = {
      value: 1,
  };*/

  //for drop down
  handleChange = (event,index,value) => {
    this.setState({
      selectRest: value
    });
  }

  //for table
  //isSelected = (index) => {
  //  return this.state.selected.indexOf(index) !== -1;
  //};
  handleRowSelection = (selectedRows) => {
      this.setState({
        selected: selectedRows,
      });
      console.log(selectedRows,this.state.restaurants[selectedRows]);
  };
  render() {
    return(
      <MuiThemeProvider>
      <div>
        {this.state ? JSON.stringify(this.state.restaurants) : "No State Yet."}
      </div>
      <p>break</p>
      <div>
        {this.state.restaurants.map(restaurant => restaurant.restaurant_name)}
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
            <RaisedButton label="Submit" primary={true}/>
          </div>

          <div className = "FormBox">
<<<<<<< HEAD
            <h2>Remove Restaurant</h2>

            <SelectField floatingLabelText="Restaurant Name: " floatingLabelFixed={true}
              value={this.state.value}
              onChange={this.handleChange}>
              {this.state.restaurants.map(restaurant => {
                  return(<MenuItem value={restaurant.restaurant_name} primaryText={restaurant.restaurant_name}/>)
              })}
            </SelectField>
            <br/>
            <RaisedButton label="Delete" primary={true}/>
=======
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
>>>>>>> 6cf0abc04f5aa77e43ffcd09445449e28a63520f
          </div>
        </div>

        <div className="FormRow">
          <div className = "FormBox">
            <h2>Add Menu Item</h2>

            <SelectField floatingLabelText="Restaurant Name: " floatingLabelFixed={true}
              value={this.state.value}
              onChange={this.handleChange}>
              {this.state.restaurants.map(restaurant => {
                  return(<MenuItem value={restaurant.restaurant_name} primaryText={restaurant.restaurant_name}/>)
              })}
            </SelectField>
            <br/>
            <TextField floatingLabelText="Menu Item: " floatingLabelFixed={true} />
            <br/>
            <TextField floatingLabelText="Price: " floatingLabelFixed={true} />
            <br/>
            <RaisedButton label="Submit" primary={true}/>
          </div>
        </div>

<<<<<<< HEAD
        <div className='FormRow'>
          <div className = "FormBox">
            <h2>Add Menu Item Ingredient</h2>

            <SelectField floatingLabelText="Restaurant Name: " floatingLabelFixed={true}
              value={this.state.value}
              onChange={this.handleChange}>
              {this.state.restaurants.map(restaurant => {
                  return(<MenuItem value={restaurant.restaurant_name} primaryText={restaurant.restaurant_name}/>)
              })}
            </SelectField>
            <br/>
            <SelectField floatingLabelText="Menu Item: " floatingLabelFixed={true}
              value={this.state.value}
              onChange={this.handleChange}>
              {this.state.restaurants.map(restaurant => {
                  return(<MenuItem value={restaurant.restaurant_name} primaryText={restaurant.restaurant_name}/>)
              })}
            </SelectField>
            <br/>
            <TextField floatingLabelText="Ingredient: " floatingLabelFixed={true} />
            <br/>
            <TextField floatingLabelText="Quanitity: " floatingLabelFixed={true} />
            <br/>
            <SelectField floatingLabelText="Unit: " floatingLabelFixed={true}
              value={this.state.value}
              onChange={this.handleChange}>
              <MenuItem value={1} primaryText="Oz"/>
              <MenuItem value={2} primaryText="Gram"/>
              <MenuItem value={3} primaryText="Lb"/>
              <MenuItem value={4} primaryText="Tsp"/>
              <MenuItem value={5} primaryText="Piece"/>
              <MenuItem value={6} primaryText="Slice"/>
            </SelectField>
            <br/>
            <RaisedButton label="Submit" primary={true}/>
          </div>


          <div className = "FormBox">
            <h2>Remove Menu Item Ingredient</h2>
            <SelectField floatingLabelText="Restaurant Name: " floatingLabelFixed={true}
              value={this.state.value}
              onChange={this.handleChange}>
              {this.state.restaurants.map(restaurant => {
                  return(<MenuItem value={restaurant.restaurant_name} primaryText={restaurant.restaurant_name}/>)
              })}
            </SelectField>
            <br/>
            <SelectField floatingLabelText="Menu Item: " floatingLabelFixed={true}
              value={this.state.value}
              onChange={this.handleChange}>
              {this.state.restaurants.map(restaurant => {
                  return(<MenuItem value={restaurant.restaurant_name} primaryText={restaurant.restaurant_name}/>)
              })}
            </SelectField>

            <Table onRowSelection={this.handleRowSelection}>
              <TableHeader>
                  <TableRow>
                    <TableHeaderColumn>Ingredient Name</TableHeaderColumn>
                    <TableHeaderColumn>Quantity</TableHeaderColumn>
                    <TableHeaderColumn>Unit</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {this.state.restaurants.map((restaurant) => {
                      return(
                        <TableRow key={restaurant.restaurant_name} selected={this.selected}>
                          <TableRowColumn>{restaurant.restaurant_name}</TableRowColumn>
                          <TableRowColumn>{restaurant.restaurant_phone}</TableRowColumn>
                          <TableRowColumn>{restaurant.restaurant_phone}</TableRowColumn>
                        </TableRow>
                      )
                  })}
                </TableBody>
            </Table>
            <br/>
            <RaisedButton label="Delete" primary={true}/>
          </div>
=======
        <div className = "FormBox">
          <h2>Edit Menu Item Recepie</h2>
          <SelectField floatingLabelText="Restaurant Name: "
            value={this.state.value}
            onChange={this.handleChange}>
            <MenuItem value={1} primaryText="Import List" />
            <MenuItem value={2} primaryText="Import List 2" />
          </SelectField>
          <br/>
          <RaisedButton label="Submit" primary={true}/>
>>>>>>> 6cf0abc04f5aa77e43ffcd09445449e28a63520f
        </div>

      </div>

      </MuiThemeProvider>
    )
  }
}
