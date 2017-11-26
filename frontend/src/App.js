import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Main from './Main';
/*class App extends Component {
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
  }*/
// render((
//	<BrowserRouter>
//		<App/>
//	</BrowserRouter>
      /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
        {this.state ? JSON.stringify(this.state.restaurants) : "No State Yet."}
        </div>
      </div>*/
// ), document.getElementById('root'));

const App = () => (
	<div>
		<Header />
		<Main />
	</div>
)
export default App;
