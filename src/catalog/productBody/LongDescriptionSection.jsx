import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.p`
  margin: 0 3vw 1vh 0;
  max-width: 700px;
`;

export default props => {
  
  return (
    <React.Fragment>
      <h2 style={{ fontWeight : 400 }}>Description</h2>
      <StyledParagraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at ducimus eligendi eum fugit impedit in
         itaque, labore libero necessitatibus optio porro possimus quis quisquam, rerum saepe suscipit temporibus
         voluptates.
      </StyledParagraph>
      <StyledParagraph>Ad laborum optio possimus quam tempora. Aliquam asperiores consequatur dolorem esse explicabo fuga nulla
         officiis, placeat? Commodi debitis dicta ducimus eius labore molestiae officiis, perferendis quasi quis quos
         ratione rem!
      </StyledParagraph>
      <StyledParagraph>Accusamus aspernatur, blanditiis cum deleniti doloremque illum maiores maxime minus nemo officia omnis qui
         tempora voluptatem voluptates voluptatibus! Dolorum, illum rem! Accusantium, cumque, laudantium. Aliquid fugit
         nam pariatur reprehenderit suscipit?
      </StyledParagraph>
      <StyledParagraph>Cum esse eum ipsa laborum minima obcaecati, provident quae repellendus vitae voluptates. At, consequuntur
         eligendi facere illo laborum nemo neque nobis obcaecati perferendis qui, rem rerum similique voluptatibus.
         Neque, praesentium.
      </StyledParagraph>
      <StyledParagraph>Dolore eos harum magni repellat veniam! A ad asperiores atque dignissimos explicabo, libero magnam magni
         mollitia nam obcaecati odio, odit omnis possimus, qui quia quo rem repellendus similique tempore tenetur!
      </StyledParagraph>
    </React.Fragment>
  );
}