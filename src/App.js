import React, { Component } from 'react';
import styled from "styled-components";
import './App.css';

import Header from "./common/header";
import Catalog from "./catalog/catalog";
import TopNav from "./catalog/TopNav";



const AppContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;


class App extends Component {
  
  
  render() {
    return (
      <AppContainer className="App">
        <Header />
        <TopNav />
        <Catalog />
        
      </AppContainer>
    );
  }
}

export default App;
