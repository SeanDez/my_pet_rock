import React, {Component} from 'react';
import styled from "styled-components";
import Button from "@material-ui/core/Button";

import BreadCrumbTrail from "./BreadCrumbTrail";
import TopDeck from "./TopDeckSection";
import RegistrySection from "./RegistrySection";
import ShippingSection from './ShippingSection';
import FeatureSection from "./FeatureSection";
import LongDescriptionSection from "./LongDescriptionSection";
import CustomerReviewsSection from "./CustomerReviewsSection";
import CrossSellSection from './CrossSellSection';
import FooterBenefitsSection from "../common/FooterBenefitsSection";
import FooterLinkSection from "../common/FooterLinkSection";
import FooterCopyright from "../common/FooterCopyright";






class Catalog extends Component {
  
  render() {
    return (
      <React.Fragment>
          <BreadCrumbTrail />
          <TopDeck />
          <RegistrySection />
          <ShippingSection />
          <FeatureSection catalogStyles={{ marginTop : '20px' }}/>
          <LongDescriptionSection />
          <CustomerReviewsSection catalogStyles={{ marginTop : '50px' }} />
          <CrossSellSection catalogStyles={{ marginTop : '20px' }} />
          <FooterBenefitsSection catalogStyles={{ marginTop : '20px' }} />
          <FooterLinkSection catalogStyles={{ marginTop : '60px' }} />
          <FooterCopyright style={ {border : "2px dashed red", marginTop : "10vh"} } />
      </React.Fragment>
    );
  }
}

export default Catalog;