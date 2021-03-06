import React from "react";
import styled from "styled-components";
import FooterBenefitsCard from "./FooterBenefitsCard";
import {FaBox, FaHeadset, FaInstagram} from "react-icons/fa";

const OuterContainer = styled.div`
  //margin: 5vh 0;
  display: flex;
  flex-flow : row wrap !important;
  justify-content: space-around;
  border: 2px dashed springgreen;
  //max-width: 700px;
`;

const iconStyle = {
  width : '40px',
  height : 'auto',
  minWidth : '20px',
  color : '#555',
  // border : '2px solid orange'
};



const cardData = [
  {
    icon : <FaHeadset style={iconStyle} />,
    text : 'Questions issues during or after your order? Give us a call and we\'ll help sort it out!'
  },{
    icon : <FaBox style={iconStyle} />,
    text : 'We ship worldwide, with free shipping to the continental United States. Please see our shipping calculator for international rates'
  },{
    icon : <FaInstagram style={iconStyle} />,
    text : 'Check our Instagram page for tips on caring for your new pet!'
  },
];

export default props => {
  return (
      <OuterContainer style={props.catalogStyles}>
        <FooterBenefitsCard
          cardData={cardData}
        />
      </OuterContainer>
  )
}