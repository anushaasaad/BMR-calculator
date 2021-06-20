import logo from './logo.svg';
import './App.css';
import BMR from './components/bmr';
import React, { Component } from 'react'

class App extends Component {

  render() {
    return (
      <div className="App">
        <BMR />
      </div>
    );
  }
}
export default App;