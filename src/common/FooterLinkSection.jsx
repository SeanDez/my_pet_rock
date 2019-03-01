import React from 'react';
import styled from "styled-components";


const OuterContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const LinkGroupContainer = styled.div`
    margin: 0 5vw;
`;

const linkData = [
  {
    header : 'Company',
    links : [
      { label : 'About Us', url: '#' },
      { label : 'Press', url: '#' },
      { label : 'Affiliate Program', url: '#' },
      { label : 'Contact Us', url: '#' },
      { label : 'Store Location', url: '#' },
      { label : 'Site Map', url: '#' },
    ]
  }, {
    header : 'Support',
    links : [
      { label : 'Contact Us', url: '#' },
      { label : 'Shipping Policy', url: '#' },
      { label : 'Return Policy', url: '#' },
      { label : 'Privacy Policy', url: '#' },
      { label : 'Gift Cards', url: '#' },
    ]
  }
];

const paragraphStyle = {
  margin : '0 0 .5vh 0'
};

const linkStyle = {
  textDecoration : 'none',
  color : 'smoke'
};

export default props => (
  <OuterContainer>
    {
      linkData.map(object => (
        <LinkGroupContainer>
          <h4>{object.header}</h4>
          {
            object.links.map(linkObject => (
              <React.Fragment>
                <p style={paragraphStyle}>
                  <a href={linkObject.url}
                     style={linkStyle}
                  >
                    {linkObject.label}
                  </a>
                </p>
              </React.Fragment>
            ))
          }
        </LinkGroupContainer>
      ))
    }
  </OuterContainer>
);