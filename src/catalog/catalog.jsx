import React, {Component} from 'react';
import styled from "styled-components";
import Button from "@material-ui/core/Button";

import BreadCrumbTrail from "./BreadCrumbTrail";
import TopDeck from "./TopDeckSection";
import ProductOptions from "./ProductOptions";
import RegistrySection from "./RegistrySection";
import ShippingSection from './ShippingSection';
import FeatureSection from "./FeatureSection";
import LongDescriptionSection from "./LongDescriptionSection";
import CustomerReviewsSection from "./CustomerReviewsSection";
import CrossSellSection from './CrossSellSection';
import FooterBenefitsSection from "./FooterBenefitsSection";
import FooterLinkSection from "./FooterLinkSection";
import FooterCopyright from "./FooterCopyright";

const ShortDescription = styled.p`
  font-size: 1rem;
  color: #282c34;
  max-width: 700px;
`;

const JumboBuyButton = styled(Button)`
  //padding: 3vh 20vw !important;
  max-width: 400px !important;
  font-size: 1.2rem !important;
  text-transform: none !important;
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

        <ProductOptions />
        
        <JumboBuyButton variant="contained" color='primary' style={{ marginTop : '3vh' }}>Add to Cart</JumboBuyButton>
        
        <RegistrySection />
        <ShippingSection />
        <FeatureSection />
        <LongDescriptionSection />
        <CustomerReviewsSection style={{ marginTop : '20vh !important' }} />
        <CrossSellSection />
        <FooterBenefitsSection />
        <FooterLinkSection />
        <FooterCopyright style={{ border: '2px dashed red', marginTop : '10vh' }} />
      </React.Fragment>
    )
  }
}

export default Catalog;