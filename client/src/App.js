import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        < AddsList adds={ adds} />
        <Adddetails adds={adds} />
         
      </div>
    );
  }
}

export default App;
