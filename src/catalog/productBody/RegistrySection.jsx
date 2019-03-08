import React from "react";
import styled from "styled-components";
import {FaTwitterSquare, FaFacebookSquare, FaPinterestSquare, FaEnvelope} from "react-icons/fa";

const OuterContainer = styled.div`
  border-bottom: 2px solid lightgrey;
  border-top: 2px solid lightgrey;
  width: 90%;
  max-width: 700px;
  display: flex;
  flex-flow: column nowrap;
`;

const SocialMediaBox = styled.div`
  display: flex;
  align-self: flex-end;
  flex-flow: row wrap;
  justify-content: flex-end;
  max-width: 300px;
  border: 2px dotted lightsalmon;
  align-items: center;
`;

const IconContainer = styled.div`
  border: 2px dashed aqua;
  width: 40px;
  min-height: 3vh;
`;

export default props => {
  
  return (
    <React.Fragment>
      <OuterContainer style={{ marginTop : '10vh', marginBottom : '5vh' }}>
        <p><a href="#">Log in</a> to add this item to your registry</p>
        <SocialMediaBox>
          <p style={{ color : 'gray', marginRight : '20px' }}>SHARE:</p>
          <IconContainer>
            <FaFacebookSquare style={{ width : '40px', height : 'auto' }} />
          </IconContainer>
          <IconContainer>
            <FaTwitterSquare style={{ width : '40px', height : 'auto' }} />
          </IconContainer>
          <IconContainer>
            <FaPinterestSquare style={{ width : '40px', height : 'auto' }} />
          </IconContainer>
          <IconContainer>
            <FaEnvelope style={{ width : '40px', height : 'auto' }} />
          </IconContainer>
        </SocialMediaBox>
      </OuterContainer>
    </React.Fragment>
  )
}