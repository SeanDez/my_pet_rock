import React from "react";
import styled from "styled-components";


const ThumbNailContainer = styled.div`
  margin-top: 4vh;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`;

const ThumbNail = styled.img`
    border: 1px solid lightgrey;
    border-radius: 3%;
    width: 40vw;
    max-width: 185px;
    height: 15vh;
    object-fit: contain;
`;



export default props => {
  
  return (
    <React.Fragment>
      <ThumbNailContainer>
        { // THUMBNAILs
          props.images.map((imageSrc, index) => (
            <a href="#" key={ index }
            >
              <ThumbNail
                src={ imageSrc }
              />
            </a>
          ))
        }
      </ThumbNailContainer>
    </React.Fragment>
  );
};
  
