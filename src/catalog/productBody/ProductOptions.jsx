import React from "react";
import styled from "styled-components";

import Button from "@material-ui/core/Button";

const options = {
  options : {
    edition : {
      label : 'Edition',
      selections : {
        premium  : {
          label     : "Premium",
          quantity  : 2,
          thumbnail : null,
          price     : 99,
          defaultOption : false
        },
        standard : {
          label     : "Standard",
          quantity  : 15,
          thumbnail : null,
          price     : 39,
          defaultOption : true
        },
      },
    },
    size : {
      label : 'Size',
      selections : {
        small : {
          label : 'Small',
          quantity  : 0,
          thumbnail : null,
          defaultOption : false
        },
        medium : {
          label : 'Medium',
          quantity  : 112,
          thumbnail : null,
          defaultOption : true
        },
        large : {
          label : 'Large',
          quantity  : 32,
          thumbnail : null,
          defaultOption : false
        }
      }
    }
  }
};

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


// for each item under options, access its label and print an h3
// also, have a div area. put a selection box there, preferably radio buttons

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