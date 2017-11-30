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

  //create restaurant
  createRestaurant = () => {
    var url = this.state.urlHeader + 'restaurant/new/' + this.state.newRestName + '/' + this.state.newRestLoc + '/' + this.state.newRestPhone + '/' + this.props.auth_token;
    fetch(url)
      .then(response => {
        //do something with response
        response.json().then(ingredients => {
        });
      })
      .catch(err => {
        console.warn('ERROR');
    });
  }

  //add inventory
  createInventoryItem = () => {
    var url = this.state.urlHeader + 'inventory/new/' + this.state.selectedRest + '/' + this.state.newInventoryName + '/' + this.state.newInventoryQuantity + '/' + this.state.selectedUnit;
    fetch(url)
      .catch(err => {
        console.warn('ERROR');
    });
  }

  //createMenuItem
  createMenuItem = () => {
    var url = this.state.urlHeader + 'menu/new/' + this.state.newItemName + '/' + this.state.selectedRest + '/' + this.state.newItemPrice;
    fetch(url)
      .catch(err => {
        console.warn('ERROR');
    });
  }

  //add Ingredient for menu item
  addIngredient = () => {
    var url = this.state.urlHeader + 'ingredient/new/' + this.state.selectedRest + '/' + this.state.selectedItemName + '/' + this.state.selectedIngredient + '/' + this.state.newIngredientPortion;
    fetch(url)
      .catch(err => {
        console.warn('ERROR');
    });
  }

  //delete restaurant
  deleteRestaurant = () =>{
    var url = this.state.urlHeader + 'restaurant/delete/' + this.state.selectedRest;
    fetch(url)
      .then(response => {
        //do something with response
        response.json().then(ingredients => {
        });
      })
      .catch(err => {
        console.warn('ERROR');
    });
  }

  //delete restaurant
  deleteInventoryItem = () =>{
    var url = this.state.urlHeader + 'restaurant/delete/' + this.state.selectedRest + '/' + this.state.selectedInventory;
    fetch(url)
      .then(response => {
        //do something with response
        response.json().then(ingredients => {
        });
      })
      .catch(err => {
        console.warn('ERROR');
    });
  }

  deleteMenuItem = () => {
    var url = this.state.urlHeader + 'menu/delete/' + this.state.selectedRest + '/' + this.state.selectedItemName;
    fetch(url)
      .then(response => {
        //do something with response
        response.json().then(ingredients => {
        });
      })
      .catch(err => {
        console.warn('ERROR');
    });
  }

  deleteIngredient = () => {
    var url = this.state.urlHeader + 'ingredient/delete/' + this.state.selectedRest + '/' + this.state.selectedItemName + '/' + this.state.selectedIngredient;
    fetch(url)
      .then(response => {
        //do something with response
        response.json().then(ingredients => {
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
        inventorys:[],
        menuItems:[],
        ingredients:[],
        selected: [],
        orders: [],
        tickets: [],
        selectedRest: true,
        urlHeader: "http://localhost:9000/"
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

  selectedIngredientChange = (event, index, value) => {
    const target = event.target;
    this.setState({
      selectedIngredient : value
    });
  }

  selectedMenuItemChange = (event, index, value) => {
    const target = event.target;
    this.setState({
      selectedMenuItem : value
    });
  }

  selectedONChange = (event, index, value) => {
    const target = event.target;
    this.setState({
      selectedON : value
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

            <div className = "OrderBox">
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

            <div className = "OrderBox">
              <h2>Current Orders</h2>
              <SelectField floatingLabelText="Order number: " floatingLabelFixed={true}
                value={this.state.selectedON} onChange={this.selectedONChange}>
                {this.state.orders.filter(order => order.restaurant_name === this.state.selectedON).map(order => {
                    return(<MenuItem value={order.order_num} primaryText={order.order_num}/>)
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
          </div>




      <h2>Manage Restaurants</h2>
        <div className='FormRow'>
          <div className = "FormBox">
            <h2>Create Restaurant</h2>
            <form>
              <TextField floatingLabelText="Restaurant Name: " floatingLabelFixed={true}
                onChange={this.handleChange} name='newRestName'/>
              <br/>
              <TextField floatingLabelText="Restaurant Location: " floatingLabelFixed={true}
                onChange={this.handleChange} name="newRestLoc"/>
              <br/>
              <TextField floatingLabelText="Restaurant Phone Number: " floatingLabelFixed={true}
                onChange={this.handleChange} name="newRestPhone"/>
              <br/>
              <RaisedButton onClick={this.createRestaurant} label="Submit" primary={true}/>
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
            <form>
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
              <RaisedButton onClick={this.createInventoryItem} label="Submit" primary={true}/>
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
            <h2>Remove Inventory Item</h2>
            <SelectField floatingLabelText="Restaurant Name: " floatingLabelFixed={true}
              value={this.state.selectedRest} onChange={this.selectedRestChange}>
              {this.state.restaurants.map(restaurant => {
                  return(<MenuItem value={restaurant.restaurant_name} primaryText={restaurant.restaurant_name}/>)
              })}
            </SelectField>
            <br/>
            <SelectField floatingLabelText="Inventory Item: " floatingLabelFixed={true}
              value={this.state.selectedInventory} onChange={this.selectedInventoryChange}>
              {this.state.inventorys.filter(inventory=>inventory.restaurant_name===this.state.selectedRest).map(inventory => {
                  return(<MenuItem value={inventory.ingredient_name} primaryText={inventory.ingredient_name}/>)
              })}
            </SelectField>
            <RaisedButton onClick = {this.deleteInventoryItem} label="Delete" primary={true}/>
          </div>
        </div>

      <h2>Manage Menus</h2>
        <div className="FormRow">

          <div className = "FormBox">
            <h2>Add Menu Item</h2>
            <form>
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
              <RaisedButton onClick={this.createMenuItem} label="Submit" primary={true}/>
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
              value={this.state.selectedMenuItem} onChange={this.selectedMenuItemChange}>
              {this.state.menuItems.filter(menuItem=>menuItem.restaurant_name===this.state.selectedRest).map(menuItem => {
                  return(<MenuItem value={menuItem.item_name} primaryText={menuItem.item_name}/>)
              })}
            </SelectField>
            <br/>
            <RaisedButton onClick={this.deleteMenuItem} label="Delete" primary={true}/>
          </div>
        </div>

      <h2>Manage Recipe</h2>
        <div className='FormRow'>
          <div className = "FormBox">
            <h2>Add Menu Item Ingredient</h2>
            <form>
              <SelectField floatingLabelText="Restaurant Name: " floatingLabelFixed={true}
                value={this.state.selectedRest} onChange={this.selectedRestChange}>
                {this.state.restaurants.map(restaurant => {
                    return(<MenuItem value={restaurant.restaurant_name} primaryText={restaurant.restaurant_name}/>)
                })}
              </SelectField>
              <br/>
              <SelectField floatingLabelText="Menu Item: " floatingLabelFixed={true}
                value={this.state.selectedMenuItem} onChange={this.selectedMenuItemChange}>
                {this.state.menuItems.filter(menuItem=>menuItem.restaurant_name===this.state.selectedRest).map(menuItem => {
                    return(<MenuItem value={menuItem.item_name} primaryText={menuItem.item_name}/>)
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
              <RaisedButton onSubmit={this.createIngredient} label="Submit" primary={true}/>
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
              value={this.state.selectedMenuItem} onChange={this.selectedMenuItemChange}>
              {this.state.menuItems.filter(menuItem=>menuItem.restaurant_name===this.state.selectedRest).map(menuItem => {
                  return(<MenuItem value={menuItem.item_name} primaryText={menuItem.item_name}/>)
              })}
            </SelectField>
            <br/>
            <SelectField floatingLabelText="Ingredient Name: " floatingLabelFixed={true}
              value={this.state.selectedIngredient} onChange={this.selectedIngredientChange}>
              {this.state.ingredients.filter(ingredient => ingredient.item_name===this.state.selectedMenuItem).map(ingredient => {
                  return(<MenuItem value={ingredient.ingredient_name} primaryText={ingredient.ingredient_name}/>)
              })}
            </SelectField>
            <RaisedButton onClick = {this.deleteIngredient} label="Delete" primary={true}/>
          </div>
        </div>



      </div>



      </MuiThemeProvider>
    )
  }
}
