import React, { useState } from "react";
import {Link} from "react-router-dom";

export default props => {
  const {match} = props;
  console.log(match, `=====match=====`);
  
  return (
    <React.Fragment>
      <h1>Category Component Here</h1>
      <p>will expand into a gridded area soon</p>
      <Link to={`${match.url}/dragonglassPendant`} >
        Link to a specific URL: the product page, passing the value dragonglassPendant to the route object in the :productSlug slot.
      </Link>
    </React.Fragment>
  )
}