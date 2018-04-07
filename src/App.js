import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from "./Components/header"

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <footer className="row application-footer">
          <div>footer</div>
        </footer>
      </div>
    );
  }
}

export default App;
