import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddsList from './components/AddsList';
import AddDetails from './components/Adddetails';

class App extends Component {
  render() {
    return (
      <div>
        < AddsList />
        <AddDetails />
         
      </div>
    );
  }
}

export default App;
