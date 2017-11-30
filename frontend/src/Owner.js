import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './Global.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RaisedButton, TextField, SelectField, MenuItem,Table,TableRowColumn,TableHeaderColumn,TableBody,TableHeader,TableRow} from 'material-ui';

export default class Owner extends Component{
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
    //get current inventory data
    fetch("http://localhost:9000/inventory")
      .then(response => {
        //do something with response
        response.json().then( inventorys => {
          this.setState({ inventorys: inventorys });
        });
      })
      .catch(err => console.warn('error'));
    fetch("http://localhost:9000/menu")
      .then(response => {
        //do something with response
        response.json().then(menuItems => {
          this.setState({ menuItems: menuItems });
        });
      })
      .catch(err => {
        console.warn('ERROR');
    });

    fetch("http://localhost:9000/ingredient")
      .then(response => {
        //do something with response
        response.json().then(ingredients => {
          this.setState({ ingredients: ingredients });
        });
      })
      .catch(err => {
        console.warn('ERROR');
    });

    /*fetch("http://localhost:9000/order")
      .then(response => {
        //do something with response
        response.json().then(orders => {
          this.setState({ orders: orders });
        });
      })
      .catch(err => {
        console.warn('ERROR');
    });

    fetch("http://localhost:9000/ticket")
      .then(response => {
        //do something with response
        response.json().then(tickets => {
          this.setState({ tickets: tickets });
        });
      })
      .catch(err => {
        console.warn('ERROR');
    });*/
  }


  getMenuItems(){
    fetch("http://localhost:9000/menuItems/" + this.selectedRest)
      .then(response => {
        //do something with response
        response.json().then(menuItems => {
          this.setState({ menuItems: menuItems });
        });
      })
      .catch(err => {
        console.warn('ERROR');
    });
  }
  //create restaurant
  createRestaurant() {
    fetch("https://localhost:9000/restaurant/new"),{
      method:'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body:{
        restaurant_name : this.newRestName,
        restaurant_location : this.newRestLoc,
        restaurant_phone : this.newRestPhone,
        restaurant_owner : this.newRestOName
      }
      .then(
        this.setState({selectReset: null})
      )
    }
  }

  //add inventory
  createInventoryItem() {
    fetch("https://localhost:9000/inventory/new"),{
      method:'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body:{
        restaurant_name : this.selectedRest,
        ingredient_name : this.newInventoryName,
        portion : this.newInventoryQuantity,
        unit : this.selectedUnit
      }
      .then(
        this.setState({selectReset: null})
      )
    }
  }

  //createMenuItem
  createMenuItem() {
    fetch("https://localhost:9000/menuItem/new"),{
      method:'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body:{
        item_name : this.newItemName,
        restaurant_name : this.selectedRest,
        price : this.newItemPrice,
      }
      .then(
        this.setState({selectReset: null})
      )
    }
  }

  //add Ingredient for menu item
  addIngredient() {
    fetch("https://localhost:9000/ingredient/new"),{
      method:'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body:{
        restaurant_name : this.selectedRest,
        item_name : this.selectedItemName,
        ingredient_name : this.selectedIngredient,
        portion : this.newIngredientPortion
      }
      .then(
        this.setState({selectReset: null})
      )
    }
  }

  //delete restaurant
  deleteRestaurant(){
    console.log(this.state.selectedRest)
    fetch("https://localhost:9000/restaurant/delete"),{
      method:'POST',
      headers:{
        'Accept': 'application.json',
        'Content-Type': 'application.json',
      },
      body:{
        restaurant_name: this.selectedRest
      }
    }
  }

  constructor(props){
      super(props);
      this.state = {
        restaurants:[],
        inventorys:[],
        menuItems:[],
        ingredients:[],
        selected: [],
        orders: [],
        tickets: [],
        selectedRest: true
      };
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  /*state = {
      value: 1,
  };*/

  //for drop down
  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name] : value
    });
  }

  selectedRestChange = (event, index, value) => {
    const target = event.target;
    this.setState({
      selectedRest : value
    });
  }

  selectedUnitChange = (event, index, value) => {
    const target = event.target;
    this.setState({
      selectedUnit : value
    });
  }

  selectedInventoryChange = (event, index, value) => {
    const target = event.target;
    this.setState({
      selectedInventory : value
    });
  }

  handleSubmit (event) {
    event.preventDefault();
    var restaurant_name = this.state.newRestName;
    var restaurant_location = this.state.newRestLoc;
    var restaurant_phone = this.state.newRestPhone;
    var restaurant_owner = this.state.newRestOName;
    console.log(restaurant_location);
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
      <div className="DocBody">
        <h1 className='Header'>Owner Homepage</h1>


        <h2>Current Orders</h2>
        <SelectField floatingLabelText="Restaurant Name: " floatingLabelFixed={true}
          value={this.state.selectedRest} onChange={this.selectedRestChange}>
          {this.state.restaurants.map(restaurant => {
              return(<MenuItem value={restaurant.restaurant_name} primaryText={restaurant.restaurant_name}/>)
          })}
        </SelectField>
          <div className='FormRow'>

            <div className = "FormBox">
              <h2>Current Orders</h2>
              <SelectField floatingLabelText="Restaurant Name: " floatingLabelFixed={true}
                value={this.state.selectedRest} onChange={this.selectedRestChange}>
                {this.state.restaurants.map(restaurant => {
                    return(<MenuItem value={restaurant.restaurant_name} primaryText={restaurant.restaurant_name}/>)
                })}
              </SelectField>
              <Table onRowSelection={this.handleRowSelection} height = '300px'>
                <TableHeader>
                    <TableRow>
                      <TableHeaderColumn>Order Number</TableHeaderColumn>
                      <TableHeaderColumn>Item Name</TableHeaderColumn>
                      <TableHeaderColumn>Item Quantity</TableHeaderColumn>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {this.state.orders.filter(order=>order.restaurant_name===this.state.selectedRest).map((order, index) => {
                        return(
                          <TableRow key={order.restaurant_name} selected={this.selected}>
                            <TableRowColumn>{order.order_num}</TableRowColumn>
                            <TableRowColumn>{order.item_name}</TableRowColumn>
                            <TableRowColumn>{order.item_quantity}</TableRowColumn>
                          </TableRow>
                        )
                    })}
                  </TableBody>
              </Table>
            </div>
          </div>



          <div className='FormRow'>
            <div className = "FormBox">
              <h2>Mark Ticket as Picked Up</h2>
              <br/>
              <RaisedButton label="Complete" primary={true} onClick={this.deleteTicket}/>
            </div>

            <div className = "DisplayBox">
              <h2>Current Tickets For PickUp</h2>
              <Table onRowSelection={this.handleRowSelection} height = '300px'>
                <TableHeader>
                    <TableRow>
                      <TableHeaderColumn>Order Number</TableHeaderColumn>
                      <TableHeaderColumn>Order Date</TableHeaderColumn>
                      <TableHeaderColumn>Customer Email</TableHeaderColumn>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {this.state.tickets.filter(ticket=>ticket.restaurant_name===this.state.selectedRest).map((ticket, index) => {
                        return(
                          <TableRow key={ticket.restaurant_name} selected={this.selected}>
                            <TableRowColumn>{ticket.order_num}</TableRowColumn>
                            <TableRowColumn>{ticket.item_name}</TableRowColumn>
                            <TableRowColumn>{ticket.item_quantity}</TableRowColumn>
                          </TableRow>
                        )
                    })}
                  </TableBody>
              </Table>
            </div>

          </div>




      <h2>Manage Restaurants</h2>
        <div className='FormRow'>
          <div className = "FormBox">
            <h2>Create Restaurant</h2>
            <form onSubmit={this.createRestaurant}>
              <TextField floatingLabelText="Restaurant Name: " floatingLabelFixed={true}
                onChange={this.handleChange} name='newRestName'/>
              <br/>
              <TextField floatingLabelText="Restaurant Location: " floatingLabelFixed={true}
                onChange={this.handleChange} name="newRestLoc"/>
              <br/>
              <TextField floatingLabelText="Restaurant Phone Number: " floatingLabelFixed={true}
                onChange={this.handleChange} name="newRestPhone"/>
              <br/>
              <RaisedButton type='submit' label="Submit" primary={true}/>
            </form>
          </div>


          <div className = "DisplayBox">
            <h2>My Restaurants</h2>
            <Table onRowSelection={this.handleRowSelection} height = '300px'>
              <TableHeader>
                  <TableRow>
                    <TableHeaderColumn>Restaurant Name</TableHeaderColumn>
                    <TableHeaderColumn>Restaurant Location</TableHeaderColumn>
                    <TableHeaderColumn>Restaurant Phone</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {this.state.restaurants.map((restaurant) => {
                      return(
                        <TableRow key={restaurant.restaurant_name} selected={this.selected}>
                          <TableRowColumn>{restaurant.restaurant_name}</TableRowColumn>
                          <TableRowColumn>{restaurant.location}</TableRowColumn>
                          <TableRowColumn>{restaurant.restaurant_phone}</TableRowColumn>
                        </TableRow>
                      )
                  })}
                </TableBody>
            </Table>
          </div>

          <div className = "FormBox">
            <h2>Remove Restaurant</h2>
            <SelectField floatingLabelText="Restaurant Name: " floatingLabelFixed={true}
              value={this.state.selectedRest} onChange={this.selectedRestChange}>
              {this.state.restaurants.map(restaurant => {
                  return(<MenuItem value={restaurant.restaurant_name} primaryText={restaurant.restaurant_name}/>)
              })}
            </SelectField>
            <br/>
            <RaisedButton label="Delete" primary={true} onClick={this.deleteRestaurant}/>
          </div>
        </div>


      <h2>Manage Inventory</h2>
        <div className='FormRow'>
          <div className = "FormBox">
            <h2>Add Inventory Item</h2>
            <form onSubmit={this.createInventory}>
              <SelectField floatingLabelText="Restaurant Name: " floatingLabelFixed={true}
                value={this.state.selectedRest} onChange={this.selectedRestChange}>
                {this.state.restaurants.map(restaurant => {
                    return(<MenuItem value={restaurant.restaurant_name} primaryText={restaurant.restaurant_name}/>)
                })}
              </SelectField>
              <br/>
              <TextField floatingLabelText="Ingredient: " floatingLabelFixed={true}
                onChange={this.handleChange} name='newInventoryName'/>
              <br/>
              <TextField floatingLabelText="Quanitity: " floatingLabelFixed={true}
                onChange={this.handleChange} name='newInventoryQuantity'/>
              <br/>
              <SelectField floatingLabelText="Unit: " floatingLabelFixed={true}
                value={this.state.selectedUnit} onChange={this.selectedUnitChange}>
                <MenuItem value={'Oz'} primaryText="Oz"/>
                <MenuItem value={'Gram'} primaryText="Gram"/>
                <MenuItem value={'Lb'} primaryText="Lb"/>
                <MenuItem value={'Tsp'} primaryText="Tsp"/>
                <MenuItem value={'Piece'} primaryText="Piece"/>
                <MenuItem value={'Slice'} primaryText="Slice"/>
              </SelectField>
              <br/>
              <RaisedButton type='submit' label="Submit" primary={true}/>
            </form>
          </div>

          <div className = "DisplayBox">
            <h2>My Inventory</h2>
            <SelectField floatingLabelText="Filter Restaurant: " floatingLabelFixed={true}
              value={this.state.selectedRest} onChange={this.selectedRestChange}>
              {this.state.restaurants.map(restaurant => {
                  return(<MenuItem value={restaurant.restaurant_name} primaryText={restaurant.restaurant_name}/>)
              })}
            </SelectField>
            <Table onRowSelection={this.handleRowSelection} height = '300px'>
              <TableHeader>
                  <TableRow>
                    <TableHeaderColumn>Restaurant Name</TableHeaderColumn>
                    <TableHeaderColumn>Ingredient Name</TableHeaderColumn>
                    <TableHeaderColumn>Quantity</TableHeaderColumn>
                    <TableHeaderColumn>Unit</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {this.state.inventorys.filter(inventory=>inventory.restaurant_name===this.state.selectedRest || this.state.selectedRest === true).map((inventory) => {
                      return(
                        <TableRow key={inventory.ingredient_name} selected={this.selected}>
                          <TableRowColumn>{inventory.restaurant_name}</TableRowColumn>
                          <TableRowColumn>{inventory.ingredient_name}</TableRowColumn>
                          <TableRowColumn>{inventory.quantity}</TableRowColumn>
                          <TableRowColumn>{inventory.unit}</TableRowColumn>
                        </TableRow>
                      )
                  })}
                </TableBody>
            </Table>
          </div>

          <div className = "FormBox">
            <h2>Remove Inventory Object</h2>
            <SelectField floatingLabelText="Restaurant Name: " floatingLabelFixed={true}
              value={this.state.selectedRest} onChange={this.selectedRestChange}>
              {this.state.restaurants.map(restaurant => {
                  return(<MenuItem value={restaurant.restaurant_name} primaryText={restaurant.restaurant_name}/>)
              })}
            </SelectField>
            <br/>
            <SelectField floatingLabelText="Inventory Item: " floatingLabelFixed={true}
              value={this.state.selectedInventory} onChange={this.selectedInventoryChange}>
              {this.state.inventorys.map(inventory => {
                  return(<MenuItem value={inventory.ingredient_name} primaryText={inventory.ingredient_name}/>)
              })}
            </SelectField>
            <RaisedButton label="Delete" primary={true}/>
          </div>
        </div>

      <h2>Manage Menus</h2>
        <div className="FormRow">

          <div className = "FormBox">
            <h2>Add Menu Item</h2>
            <form onSubmit={this.createMenuItem}>
              <SelectField floatingLabelText="Restaurant Name: " floatingLabelFixed={true}
                value={this.state.selectedRest} onChange={this.selectedRestChange}>
                {this.state.restaurants.map(restaurant => {
                    return(<MenuItem value={restaurant.restaurant_name} primaryText={restaurant.restaurant_name}/>)
                })}
              </SelectField>
              <br/>
              <TextField floatingLabelText="Menu Item: " floatingLabelFixed={true}
                onChange={this.handleChange} name='newItemName'/>
              <br/>
              <TextField floatingLabelText="Price: " floatingLabelFixed={true}
                onChange={this.handleChange} name='newItemPrice'/>
              <br/>
              <RaisedButton type='submit' label="Submit" primary={true}/>
            </form>
          </div>

          <div className = "DisplayBox">
            <h2>Display Menu Items</h2>
            <Table onRowSelection={this.handleRowSelection} height = '300px'>
              <TableHeader>
                  <TableRow>
                    <TableHeaderColumn>Restaurant Name</TableHeaderColumn>
                    <TableHeaderColumn>Menu Item Name</TableHeaderColumn>
                    <TableHeaderColumn>Price</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {this.state.menuItems.map((menuItem) => {
                      return(
                        <TableRow key={menuItem.item_name} selected={this.selected}>
                          <TableRowColumn>{menuItem.restaurant_name}</TableRowColumn>
                          <TableRowColumn>{menuItem.item_name}</TableRowColumn>
                          <TableRowColumn>{menuItem.price}</TableRowColumn>
                        </TableRow>
                      )
                  })}
                </TableBody>
            </Table>
          </div>

          <div className = "FormBox">
            <h2>Remove Menu Item</h2>
            <SelectField floatingLabelText="Restaurant Name: " floatingLabelFixed={true}
              value={this.state.selectedRest} onChange={this.selectedRestChange}>
              {this.state.restaurants.map(restaurant => {
                  return(<MenuItem value={restaurant.restaurant_name} primaryText={restaurant.restaurant_name}/>)
              })}
            </SelectField>
            <SelectField floatingLabelText="Menu Item: " floatingLabelFixed={true}
              value={this.state.value}
              onChange={this.handleChange}>
              {this.state.menuItems.map(menuItem => {
                  return(<MenuItem value={menuItem.item_name} primaryText={menuItem.item_name}/>)
              })}
            </SelectField>
            <br/>
            <RaisedButton label="Delete" primary={true}/>
          </div>
        </div>

      <h2>Manage Recipe</h2>
        <div className='FormRow'>
          <div className = "FormBox">
            <h2>Add Menu Item Ingredient</h2>
            <form onSubmit={this.createIngredient}>
              <SelectField floatingLabelText="Restaurant Name: " floatingLabelFixed={true}
                value={this.state.selectedRest} onChange={this.selectedRestChange}>
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
              <SelectField floatingLabelText="Ingredient Name: " floatingLabelFixed={true}
                value={this.state.value}
                onChange={this.handleChange}>
                {this.state.restaurants.map(restaurant => {
                    return(<MenuItem value={restaurant.restaurant_name} primaryText={restaurant.restaurant_name}/>)
                })}
              </SelectField>
              <br/>
              <TextField floatingLabelText="Quanitity: " floatingLabelFixed={true}
                onChange={this.handleChange} name='newIngredientQuantity'/>
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
            </form>
          </div>

          <div className = "DisplayBox">
            <h2>Display Item Ingredients</h2>
            <Table onRowSelection={this.handleRowSelection} height = '300px'>
              <TableHeader>
                  <TableRow>
                    <TableHeaderColumn>Restaurant Name</TableHeaderColumn>
                    <TableHeaderColumn>Item Name</TableHeaderColumn>
                    <TableHeaderColumn>Ingredient Name</TableHeaderColumn>
                    <TableHeaderColumn>Quantity</TableHeaderColumn>
                    <TableHeaderColumn>Unit</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {this.state.ingredients.map((ingredient) => {
                      return(
                        <TableRow key={ingredient.ingredient_name} selected={this.selected}>
                          <TableRowColumn>{ingredient.restaurant_name}</TableRowColumn>
                          <TableRowColumn>{ingredient.item_name}</TableRowColumn>
                          <TableRowColumn>{ingredient.ingredient_name}</TableRowColumn>
                          <TableRowColumn>{ingredient.portion}</TableRowColumn>
                          <TableRowColumn>{ingredient.unit}</TableRowColumn>
                        </TableRow>
                      )
                  })}
                </TableBody>
            </Table>
          </div>

          <div className = "FormBox">
            <h2>Remove Menu Item Ingredient</h2>
            <SelectField floatingLabelText="Restaurant Name: " floatingLabelFixed={true}
              value={this.state.selectedRest} onChange={this.selectedRestChange}>
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
            <RaisedButton label="Delete" primary={true}/>
          </div>
        </div>



      </div>



      </MuiThemeProvider>
    )
  }
}
