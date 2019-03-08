import React from "react";
import styled from "styled-components";


const OuterContainer = styled.div`
  margin: 0 3vw;
`;

const Heading = styled.h1`
  display: flex;
  justify-content: center;
`;

export default props => {
  
  return (
    <OuterContainer>
      <Heading>Title</Heading>
      <p>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores autem blanditiis culpa est excepturi harum itaque laudantium omnis placeat quasi, quia quisquam quo reiciendis rem unde velit. Atque, hic.</span>
      </p>
      <p>
        <span>Animi consequatur cumque dignissimos hic inventore natus odit quia rem sit vero? Amet aspernatur consectetur consequatur, corporis doloribus ducimus harum id, iste labore laudantium, molestias nostrum omnis sint voluptatem voluptatum.</span>
      </p>
    </OuterContainer>
  );
}