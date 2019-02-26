import React from "react";
import {FaBars, FaShoppingCart, FaSearch} from "react-icons/fa";

import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';

import {withStyles} from '@material-ui/core/styles';
import styled from "styled-components";

const styles = theme => ({
  root: {
    // flexGrow: 1,
    flexFlow : 'row wrap',
    justifyContent : 'space-between'
  },
  grow: {
    // flexGrow: 1,
  },
  menuButton: {
    // marginLeft: -12,
    // marginRight: 20,
    width : '40px'
  },
  searchButton : {
    position : 'absolute',
    left : '-8px',
    bottom : '-8px'
  },
  search : {
    // borderBottom : '1px solid darkblue',
    fontStyle : 'italic',
    lineHeight : 0,
    position : 'relative',
    paddingLeft : '25px',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  }
});

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 2px dotted red;
`;

const SearchInputContainer = styled.div`
  position : relative;
`;


const TopNav = (props) => {
  const {classes} = props;
  
  return (
    <React.Fragment>
      <AppBar position='static' className={ classes.root }>
        <OuterContainer>
          <IconButton className={ classes.menuButton }>
            <FaBars size='1.5rem' />
          </IconButton>
          <SearchInputContainer>
            <IconButton className={ [classes.menuButton, classes.searchButton].join(" ") }>
              <FaSearch size='1.5rem' />
            </IconButton>
            <Input className={ classes.search } placeholder='product search'
            />
          </SearchInputContainer>
          <IconButton className={ classes.menuButton }>
            <FaShoppingCart size='1.5rem' />
          </IconButton>
        </OuterContainer>
      </AppBar>
    </React.Fragment>
  );
};

export default withStyles(styles)(TopNav);

