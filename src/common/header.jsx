import React, {Component} from 'react';
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-flow: row wrap;
  border: 1px dotted black;
  align-content: space-around;
  height: 120px;
`;

const LogoBox = styled.div`
  height : 45px;
  width : 100px;
  background-color : lightgreen;
`;

const SaleBox = styled.div`
  height : 60px;
  width : 100px;
  background-color : darkslateblue;
  flex-basis: 200px;
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