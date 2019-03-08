import React from "react";
import styled from "styled-components";
import {FaSlidersH, FaChevronCircleLeft, FaChevronCircleRight} from "react-icons/fa";


const OuterContainer = styled.div`
  border-bottom: 1px solid lightgray;
  border-top: 1px solid lightgray;
  padding: 12px 0;
  display: flex;
  flex-flow: row nowrap;
  width: 94%;
  justify-content: flex-start;
  align-items: center;
`;

const PrevNextButtonContainer = styled.div`
  display: flex;
  width: 100%;
  padding-right: 27px;
  justify-content: center;
  //border: 2px dashed dodgerblue;
`;

const SliderIconStyled = styled(FaSlidersH)`
  width : 27px;
  height : auto;
`;

const LeftChevronStyled = styled(FaChevronCircleLeft)`
  width : 27px;
  height : auto;
  color : dodgerblue;
  margin-right: 15px;
`;
const RightChevronStyled = styled(FaChevronCircleRight)`
  width : 27px;
  height : auto;
  color : dodgerblue;
  margin-left: 15px;
`;

export default props => {
  const pageNumber = 1;
  
  return (
    <OuterContainer>
      <SliderIconStyled />
      
      <PrevNextButtonContainer>
        <LeftChevronStyled />
        <p>Page { pageNumber }</p>
        <RightChevronStyled />
      </PrevNextButtonContainer>
    </OuterContainer>
  );
}