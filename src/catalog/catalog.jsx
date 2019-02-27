import React, {Component} from 'react';
import styled from "styled-components";

import BreadCrumbTrail from "./BreadCrumbTrail";
import TopDeck from "./TopDeck";

const ShortDescription = styled.p`
  font-size: 1rem;
  color: #282c34;
`;


class Catalog extends Component {
  
  render() {
    return (
      <React.Fragment>
        <BreadCrumbTrail />
        <TopDeck />
        <ShortDescription>
          Forged from the flames of 100% authentic dragon fire, this real pendant could enable your family to live  a long, healthy life, or a mindless eternity in the army of the dead should it be misplaced.
        </ShortDescription>
        <ShortDescription>
          Imbued with special properties guaranteed to work against White Walkers and Giants. Very limited supply, order before our stock runs out for good!
        </ShortDescription>
        <p style={{ marginTop : '5vh', border: '2px dashed green' }}>Catalog</p>
      </React.Fragment>
    )
  }
}

export default Catalog;