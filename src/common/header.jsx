import React, {Component} from 'react';
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-flow: row nowrap;
  border: 1px dotted black;
  align-content: space-around;
  height: 65px;
  width: 100%;
  border: 2px dashed maroon;
  
  @media (min-width: 600px) {
    justify-content: space-between;
  }
`;

const LogoBox = styled.div`
  height : 45px;
  width : 100px;
  min-height: auto;
  min-width: 10vw;
  background-color : lightgreen;
  border: 2px dashed teal;
`;

const SaleBox = styled.div`
  height : 60px;
  width : 150px;
  min-height: auto;
  min-width: 10vw;
  background-color : darkslateblue;
  border: 2px dashed orange;
`;



// logo, sale
class Header extends Component {
  
  render() {
    return (
      <HeaderContainer>
        <LogoBox />
        <SaleBox />
      </HeaderContainer>
    )
  }
}

export default Header;