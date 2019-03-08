import React from "react";
import styled from "styled-components";


const ThumbNailContainer = styled.div`
  margin-top: 4vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  padding: 0 4vw 0 4vw;
`;

const ThumbNail = styled.img`
    border: 1px solid lightgrey;
    border-radius: 3%;
    width: 40vw;
    max-width: 80px;
    max-height: 80px;
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
  
