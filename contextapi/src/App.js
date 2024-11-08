import React, { Component } from 'react';
import './App.css';
import { CommonContext } from './Component/CommnContext';
import Main from './Component/Main';
import UpdateButton from './Component/UpdateButton';
import Footer from './Component/Footer';
import HeaderClass from './Component/Header';


export default class App extends Component {
  constructor() {
    super();
    this.updateColor = (color) => {
      this.setState({
        color: color
      });
    };
    this.state = {
      color: "green",
      updateColor: this.updateColor
    };

  }

  render() {
    return (
      <div className="App">
        <CommonContext.Provider value={this.state}>
          <h1>Common Context</h1>
          <HeaderClass />
          <Main />
          <UpdateButton />
          <Footer />
        </CommonContext.Provider>
      </div>
    );
  }
}
