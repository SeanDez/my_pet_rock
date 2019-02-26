import React, { Component } from 'react';
import './App.css';

import Header from "./common/header";
import Catalog from "./catalog/catalog";
import TopNav from "./catalog/TopNav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TopNav />
        <Catalog />
      </div>
    );
  }
}

export default App;
