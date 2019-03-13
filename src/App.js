import React, { Component, useState, useEffect, useReducer } from 'react';
import {connect} from "react-redux";
import checkoutActions from './checkoutProcess/checkoutActions'
import _ from "lodash";
import store from "./common/rootReducer";

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
import Cart from "./checkoutProcess/CartBodyView";

import dummyProductData from "./catalog/productBody/dummyProductData";

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
  
  useEffect(() => {
    console.log(props.cart, `=====props.cart=====`);
  });
  
  const productSlug = useEffect(() => {
    console.log(history, `=====history=====`);
  });
  
  return (
    <BrowserRouter>
      <AppContainer className="App">
        {/* SiteWide Header */}
        <Header />
        <TopNav />
  
        {/* Choose the view body */ }
        <Switch>
          <Route
            path='/' exact
            render={ () => <HomeViewSection /> }
          />
          
          <Route
            path='/cart'
            render={routeProps => {
              
              return <Cart
                cart={props.cart}
              />
            }}
          />
          
          <Route
            path='/:sectionSlug/:productSlug'
            render={ routeProps => {

              // capture the correct product data
              // get the index and then use it in the prop assignment
              const productIndex = dummyProductData.findIndex(item => item.productSlug ===
              routeProps.match.params.productSlug);
              
              
              // render the catalog template only if sectionSlug matches a catalog category
              const catalogCategories = ["rocks", "pet-rocks"];
              
              if (catalogCategories.indexOf(routeProps.match.params.sectionSlug) >= 0) {
                return (
                  // <h1>Hi</h1>
                  <ProductBodyView
                    addToCart={props.addToCart}
                    productData={dummyProductData[productIndex]}
                    cart={props.cart}
                  />
                );
              }
            }
            }
          />
          
          <Route
            path='/:categorySlug'
            render={ routeProps => {
              return <CategorySection { ...routeProps } />;
            } }
          />
        </Switch>
        
        {/* Sitewide Footer */}
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

const ConnectedApp = connect(
  // map state to props
  state => ({
    // key a state name to a redux state key ( user : state.user )
    cart : state.checkoutProcess.cart
  }),
  // map dispatch to props
  dispatch => ({
    addToCart : productInfo => dispatch(checkoutActions.addToCart(productInfo))
  })
)(App);


export default ConnectedApp;
