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
          <FeatureSection />
          <LongDescriptionSection />
          <CustomerReviewsSection style={ {marginTop : "20vh !important"} } />
          <CrossSellSection />
          <FooterBenefitsSection />
          <FooterLinkSection />
          <FooterCopyright style={ {border : "2px dashed red", marginTop : "10vh"} } />
      </React.Fragment>
    );
  }
}

export default Catalog;