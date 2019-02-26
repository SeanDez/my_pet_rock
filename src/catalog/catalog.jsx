import React, {Component} from 'react';
import BreadCrumbTrail from "./BreadCrumbTrail";

class Catalog extends Component {
  
  render() {
    return (
      <React.Fragment>
        <BreadCrumbTrail />
        <p>Catalog</p>
      </React.Fragment>
    )
  }
}

export default Catalog;