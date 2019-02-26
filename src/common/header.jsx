import React, {Component} from 'react';
import styled from "styled-components";


const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-flow: row wrap;
  border: 1px dotted black;
`;

const LogoBox = styled.div`
  height : 45px;
  width : 100px;
  background-color : lightgreen;
`;

const SaleBox = styled.div`
  height : 60px;
  width : 200px;
  background-color : darkslateblue;
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