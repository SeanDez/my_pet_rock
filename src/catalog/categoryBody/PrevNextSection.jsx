import React, { useState } from "react";
import styled from "styled-components";
import {FaSlidersH, FaChevronCircleLeft, FaChevronCircleRight} from "react-icons/fa";
import {Link} from "react-router-dom";

import {withStyles} from "@material-ui/core/styles";
import Menu from '@material-ui/core/Menu';
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";

// injects into props inside props.classes
const materialUiStyles = theme => ({
  expansionItems : {
    margin : '0 0 0 7px',
    border : '2px dashed red'
  }
});

const OuterContainer = styled.div`
  border-bottom: 1px solid lightgray;
  border-top: 1px solid lightgray;
  padding: 12px 0;
  display: flex;
  flex-flow: row nowrap;
  width: 94%;
  justify-content: flex-start;
  align-items: center;
`;

const PrevNextButtonContainer = styled.div`
  display: flex;
  width: 100%;
  padding-right: 27px;
  justify-content: center;
  //border: 2px dashed dodgerblue;
    @media (min-width: 700px) {
      padding-right: 0;
`;

const SliderIconStyled = styled(FaSlidersH)`
  width : 27px;
  height : auto;
  
  @media (min-width: 700px) {
    display: none;
  }
`;

const LeftChevronStyled = styled(FaChevronCircleLeft)`
  width : 27px;
  height : auto;
  color : dodgerblue;
  margin-right: 15px;
`;
const RightChevronStyled = styled(FaChevronCircleRight)`
  width : 27px;
  height : auto;
  color : dodgerblue;
  margin-left: 15px;
`;
const LinkInheritedStyles = styled(Link)`
  color: inherit;
  text-decoration: inherit;
`;


const PrevNextSection = props => {
  const {classes} = props;
  
  // must be here. no pure functions with hooks
  const [menuAnchor, setMenuAnchor] = useState(null);
  
  // set the anchor element for the menu
  const useMenuAnchor = (event, addOrRemove) => {
    if (addOrRemove === 'remove') {
      setMenuAnchor(null)
    } else {
      console.log(event.currentTarget, `=====event.currentTarget=====`);
      setMenuAnchor(event.currentTarget)
    }
  };
  
  const [hardnessPanelIsOpen, setHardnessPanelState] = useState(false);
  
  
  const pageNumber = 1;
  
  return (
    <OuterContainer>
      <SliderIconStyled
        onClick={ e => useMenuAnchor(e, 'add') }
      />
      
      <Menu
        anchorEl={menuAnchor} // it's like all state is destructured now
        open={Boolean(menuAnchor)}
      >
        <MenuItem
          onClick={ e => {
            setHardnessPanelState(!hardnessPanelIsOpen)
          } }
        >
          Hardness
        </MenuItem>
        <ExpansionPanel
          expanded={hardnessPanelIsOpen}
        >
          <MenuItem className={classes.expansionItems}>Soft</MenuItem>
          <MenuItem className={classes.expansionItems}>Medium</MenuItem>
          <MenuItem className={classes.expansionItems}>Hard</MenuItem>
        </ExpansionPanel>
        
        
        <MenuItem
          onClick={ e => useMenuAnchor(e, 'remove') }
        >
          Color
        </MenuItem>
        <MenuItem
          onClick={ e => useMenuAnchor(e, 'remove') }
        >
          Discount
        </MenuItem>
        
      </Menu>
      
      
      
      <PrevNextButtonContainer>
        <LeftChevronStyled />
        <p>Page { pageNumber }</p>
        <RightChevronStyled />
      </PrevNextButtonContainer>
      
      {console.log(menuAnchor, `=====menuAnchor in render=====`)}
      
    </OuterContainer>
  );
};

export default withStyles(materialUiStyles)(PrevNextSection);