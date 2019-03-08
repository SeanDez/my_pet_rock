import React, { Component } from 'react';
import styled from "styled-components";
import './App.css';
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import queryString from "query-string";


import Header from "./common/header";
import Catalog from "./catalog/catalog";
import TopNav from "./catalog/TopNav";
import HomeViewSection from './catalog/HomeBodyView'
import CategorySection from './catalog/CategoryBodyView';


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
    // history.push('/test?testKey=testValue&2ndKey=2ndValue&3rdKey=3rdValue', { key : 'val'})
    // the above pushed the query string into the url after initial mount
    
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
    console.log(this.props.history, `=====this.props.history=====`);
    return (
      <BrowserRouter>
        <AppContainer className="App">
          <Header />
          <TopNav />
          {/*<Catalog />*/ }
        
        
          <Switch> {/* Choose the view body */ }
            <Route
              path='/' exact
              render={ () => <HomeViewSection /> }
            />
          
            <Route
              path='/:sectionSlug/:productSlug'
              render={ routeProps => {
                console.log(routeProps, `=====routeProps=====`);
                // render the catalog template only if sectionSlug matches a catalog category
                const catalogCategories = ['rocks'];
                if (catalogCategories.indexOf(routeProps.match.params.sectionSlug) >= 0) {
                  return <Catalog />;
                }
              }
              }
            />
          
            <Route
              path='/:categorySlug'
              render={ routeProps => {
                console.log(routeProps, `=====routeProps=====`);
                return <CategorySection {...routeProps} />;
              } }
            />
          </Switch>
        </AppContainer>
      </BrowserRouter>
    );
  }
}

export default App;
