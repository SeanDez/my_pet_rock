import React, {useEffect} from 'react';

import BreadCrumbTrail from "../BreadCrumbTrail";
import TopDeck from "./TopDeckSection";
import Registry from "./RegistrySection";
import Shipping from './ShippingSection';
import Features from "./FeatureSection";
import LongDescription from "./LongDescriptionSection";
import CustomerReviews from "./CustomerReviewsSection";
import CrossSells from '../CrossSellSection';


const ProductBodyView = props => {
  
  
  return (
    <React.Fragment>
      <BreadCrumbTrail />
      <TopDeck
        addToCart={props.addToCart}
        data={props.productData}
      />
      <Registry />
      <Shipping />
      <Features
        catalogStyles={ {marginTop : "20px"} } />
      <LongDescription
        data={props.productData.longDescription}
      />
      <CustomerReviews
        catalogStyles={ {marginTop : "50px"} } />
      <CrossSells
        catalogStyles={ {marginTop : "20px"} } />
    </React.Fragment>
  );
};

export default ProductBodyView;