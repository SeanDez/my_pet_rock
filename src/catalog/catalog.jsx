import React, {Component} from 'react';
import BreadCrumbTrail from "./BreadCrumbTrail";
import TopDeck from "./TopDeck";

class Catalog extends Component {
  
  render() {
    return (
      <React.Fragment>
        <BreadCrumbTrail />
        <TopDeck />
        <p>Catalog</p>
      </React.Fragment>
    )
  }
}

export default Catalog;