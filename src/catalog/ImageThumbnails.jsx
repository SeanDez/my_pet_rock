import React from "react";
import styled from "styled-components";


const ThumbNailContainer = styled.div`
  margin-top: 4vh;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  height: 8vh;
`;

const ThumbNail = styled.img`
    border: 1px solid lightgrey;
    border-radius: 3%;
    max-width: 15vw;
    height: 8vh;
    object-fit: contain;
`;



export default props => {
  
  return (
    <React.Fragment>
      <ThumbNailContainer>
        {
          props.images.map((imageSrc, index) => {
            console.log(imageSrc, `=====imageSrc=====`);
            return <a href="#">
              <ThumbNail
                key={ index }
                src={ imageSrc }
              />
            </a>;
          })
        }
      </ThumbNailContainer>
    </React.Fragment>
  );
};
  
