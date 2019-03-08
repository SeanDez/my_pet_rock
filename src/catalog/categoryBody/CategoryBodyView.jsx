import React, { useState } from "react";
import {Link} from "react-router-dom";

import CategoryHeader from "./CategoryHeader";
import PrevNextSection from "./PrevNextSection";

export default props => {
  const {match} = props;
  console.log(match, `=====match=====`);
  
  return (
    <React.Fragment>
      {/* Header area with title and summary text */}
      <CategoryHeader />
      
      {/* Options (separate section on wide screens) */}
      
      {/* Pagination */}
      <PrevNextSection />
      
      {/* Product Grid */}
      
      {/* Another Pagination */}
  
      <Link to={`${match.url}/dragonglassPendant`} >
        Link to a specific URL: the product page, passing the value dragonglassPendant to the route object in the :productSlug slot.
      </Link>
    </React.Fragment>
  )
}