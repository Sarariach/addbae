import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddsList from './components/AddsList';
import AddDetails from './components/Adddetails';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path="/adds" component = {AddsList} />
        <Route exact path="/adds/:id" component= {AddDetails} />
        <Route exact path="/" render={() => <Redirect to="/adds"/> } />
      </div>
      </Router>
    );
  }
}

export default App;
