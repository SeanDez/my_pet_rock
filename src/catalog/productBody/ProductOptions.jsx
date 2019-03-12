import React, {useEffect, useState} from "react";
import styled from "styled-components";

import Button from "@material-ui/core/Button";





export default props => {
  
  return (
    <div style={{ marginTop : '30px' }}>
      <h2 style={{ fontWeight : 400 }}>Options</h2>
      
      { // map out the labels
        props.options.map((optionSet, index) => (
          <React.Fragment key={index}>
            <h3>{optionSet.label}</h3>
            { // map out the selections
              optionSet.selections.map((choice, index) => (
                <EnhancedButton
                  color='primary'
                  variant='outlined'
                  key={index}
                  onClick={ () => props.setProductOptions({
                    ...props.productOptionsState,
                    [optionSet.label] : choice
                  })}
                >
                  {choice}
                </EnhancedButton>
              ))
            }
          </React.Fragment>
        ))
      }
    </div>
  );
}





const OptionContainer = styled.div`
  margin: -1vh auto;
  padding: 0.7vh auto;
  min-width: 250px;
  max-width: 400px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  border: 2px dashed mediumpurple;
  align-content: center;
`;

const EnhancedButton = styled(Button)`
  min-width: 110px !important;
  margin: 1vh !important;
  text-transform: none !important;
`;