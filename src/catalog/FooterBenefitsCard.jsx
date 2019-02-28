import React from "react";
import styled from "styled-components";
import {FaHeadset, FaBox, FaInstagram} from 'react-icons/fa';

const OuterContainer = styled.div`
  //margin: 5vh 0;
  display: flex;
  flex-flow : column nowrap;
  justify-content: space-around;
`;




const iconStyle = {
  width : '13vw',
    height : 'auto',
    minWidth : '20px',
    color : '#555',
    alignSelf : 'center'
};

const paragraphStyle = {
  color : '#222',
  fontSize : '0.80rem',
  margin : '1vh 20vw 3vh 20vw'
};

// put them all in containers. Then the underlying component doesn't have to be touched


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
    <React.Fragment>
      {
        cardData.map((dataObject, index) => (
          <OuterContainer key={index}>
            { dataObject.icon }
            <p style={ paragraphStyle } key={index}>
              { dataObject.text }
            </p>
          </OuterContainer>
        ))
      }
    </React.Fragment>
  );
}