import React, { Component } from 'react';
import Articles from './Articles';
//import logo from '../public/images/logo.svg';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to Tutor School</h1>
        </header>
        <Articles/>
      </div>
    );
  }
}

export default App;
