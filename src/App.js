import React, { Component, useState, useEffect, useReducer } from 'react';
import styled from "styled-components";
import './App.css';
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import queryString from "query-string";


import Header from "./common/header";
import ProductBodyView from "./catalog/productBody/ProductBodyView";
import TopNav from "./catalog/TopNav";
import HomeViewSection from "./catalog/HomeBodyView";
import CategorySection from './catalog/categoryBody/CategoryBodyView';
import FooterBenefitsSection from "./common/FooterBenefitsSection";
import FooterLinkSection from "./common/FooterLinkSection";
import FooterCopyright from "./common/FooterCopyright";


const history = createBrowserHistory();
const location = history.location;

const AppContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;


const App = props => {
  
  useEffect(() => {
    history.listen((location, action) => {
      // location is an object like window.location
      console.log(action, location.pathname, location.state);
    });
    
    const parsedQueryString = queryString.parse(history.location.search);
    console.log(parsedQueryString, `=====parsedQueryString=====`);
  });
  
  
  return (
    <BrowserRouter>
      <AppContainer className="App">
        <Header />
        <TopNav />
        
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
              const catalogCategories = ["rocks"];
              if (catalogCategories.indexOf(routeProps.match.params.sectionSlug) >= 0) {
                return <ProductBodyView />;
              }
            }
            }
          />
          
          <Route
            path='/:categorySlug'
            render={ routeProps => {
              console.log(routeProps, `=====routeProps=====`);
              return <CategorySection { ...routeProps } />;
            } }
          />
        </Switch>
        
        <FooterBenefitsSection
          catalogStyles={ {marginTop : "20px"} } />
        <FooterLinkSection
          catalogStyles={ {marginTop : "60px"} } />
        <FooterCopyright
          style={ {border : "2px dashed red", marginTop : "10vh"} } />
      </AppContainer>
    </BrowserRouter>
  );
};

export default App;
