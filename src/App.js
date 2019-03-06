import React, { Component } from 'react';
import styled from "styled-components";
import './App.css';
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import queryString from "query-string";


import Header from "./common/header";
import Catalog from "./catalog/catalog";
import TopNav from "./catalog/TopNav";



const history = createBrowserHistory();
const location = history.location;

const AppContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;


class App extends Component {
  
  componentDidMount() {
    history.listen((location, action) => {
      // location is an object like window.location
      console.log(action, location.pathname, location.state);
    });
    console.log(`=====history push=====`);
    history.push('/test?testKey=testValue&2ndKey=2ndValue&3rdKey=3rdValue', { key : 'val'})
    console.log(history, `=====history=====`);
    const parsedQueryString = queryString.parse(history.location.search)
    console.log(parsedQueryString, `=====parsedQueryString=====`);
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps !== this.props ||
      prevState !== this.state
    ) {
      history.listen((location, action) => {
        // location is an object like window.location
        console.log(action, location.pathname, location.state);
      });
    }
  }
  
  
  render() {
    return (
      <BrowserRouter>
        <AppContainer className="App">
          <Header />
          <TopNav />
          <Catalog />
        
          <Switch>
            <Route
              path='/'
              render={ () => {
                return (
                  null
                );
              } }
            />
          </Switch>
        </AppContainer>
      </BrowserRouter>
    );
  }
}

export default App;
