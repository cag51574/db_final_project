import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './Global.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RaisedButton, TextField, SelectField, MenuItem,Table,TableRowColumn,TableHeaderColumn,TableBody,TableHeader,TableRow} from 'material-ui';

export default class Customer extends Component{
  componentDidMount() {
    //get current restaurant data
    fetch("http://localhost:9000/restaurant")
      .then(response => {
        //do something with response
        response.json().then( restaurants => {
          this.setState({ restaurants: restaurants });
        });
      })
      .catch(err => {
        console.warn('ERROR');
    });
    //get current menu data
    fetch("http://localhost:9000/menu")
      .then(response => {
        //do something with response
        response.json().then( menus => {
          this.setState({ menus: menus });
        });
      })
      .catch(err => {
        console.warn('ERROR');
    });
  }

  constructor(props){
      super(props);
      this.state = {
        restaurants:[],
        menus:[],
        selectedRest: true,
        restList: [],
        itemList: [],
        deselectOnClickaway: false,
        displaySelectAll: false,
        finalText: null
      };
      this.handleRowSelection = this.handleRowSelection.bind(this);
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name] : value
    });
  }

  handleTextChange = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
  }

  selectedRestChange = (event, index, value) => {
    const target = event.target;
    this.setState({
      selectedRest : value
    });
  }

  //select menu items
  handleRowSelection = (index) => {
      this.state.restList = [];
      this.state.itemList = [];
      console.log(index);
      for(var i = 0; i < index.length;i++){
          var restaurant_name = this.state.selectedRest;
          var itemName = this.state.menus.filter(menu=>menu.restaurant_name===this.state.selectedRest)[index[i]].item_name;
          this.state.restList.push(restaurant_name);
          this.state.itemList.push(itemName);
      }
  }

  placeOrder = () => {
    fetch("https://localhost:9000/order",{
      method:'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body:{
        restaurant_name : this.restList,
        item_name : this.itemList
    }})
    .then(
      this.setState({
        finalText: 'Order was completed!'
      })
    )
  };

    render() {
      return(
        <MuiThemeProvider>
          <div className="DocBody">

            <h1 className='Header'>Order Here!</h1>
            <SelectField floatingLabelText="Restaurant Name: " floatingLabelFixed={true}
              value={this.state.selectedRest} onChange={this.selectedRestChange}>
              {this.state.restaurants.map(restaurant => {
                  return(<MenuItem value={restaurant.restaurant_name} primaryText={restaurant.restaurant_name}/>)
              })}
            </SelectField>
            <Table onRowSelection={this.handleRowSelection}
              height = '300px'
              multiSelectable = "false"
            >
              <TableHeader
                  displaySelectAll = {this.state.displaySelectAll}
              >
                  <TableRow>
                    <TableHeaderColumn>Restaurant Name</TableHeaderColumn>
                    <TableHeaderColumn>Menu Item</TableHeaderColumn>
                    <TableHeaderColumn>Price</TableHeaderColumn>
                    <TableHeaderColumn>How Many?</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody deselectOnClickaway= {this.state.deselectOnClickaway}>
                  {this.state.menus.filter(menu=>menu.restaurant_name===this.state.selectedRest).map((menu, index) => {
                      return(
                        <TableRow key={index} selected={this.selected}>
                          <TableRowColumn>{menu.restaurant_name}</TableRowColumn>
                          <TableRowColumn>{menu.item_name}</TableRowColumn>
                          <TableRowColumn>{menu.price}</TableRowColumn>
                          <TableRowColumn>
                            <TextField onChange={this.handleTextChange} name={this.item_name}></TextField>
                          </TableRowColumn>
                        </TableRow>
                      )
                  })}
                </TableBody>
            </Table>
            <RaisedButton onClick = {this.placeOrder} label="Place Order" primary={true}/>
            <h2>{this.finalText}</h2>
          </div>
        </MuiThemeProvider>
    )}

}
