import React, { Component } from 'react';
import './App.css';

import Header from "./common/header";
import Catalog from "./catalog/catalog";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Catalog />
      </div>
    );
  }
}

export default App;
