import React from "react";
import styled from "styled-components";
import {FaHeadset, FaBox, FaInstagram} from 'react-icons/fa';


const OuterContainer = styled.div`
  background-color: whitesmoke;
  width: 100%;
  border: 2px dashed red;
  margin-top : 10vh;
`;

const Emphasized = styled.span`
  font-weight: 500;
`;

export default props => (
  <React.Fragment>
    <OuterContainer>
      <p>Copyright ©2019, <Emphasized>My Pet Rock</Emphasized></p>
    </OuterContainer>
  </React.Fragment>
)