import React from "react";
import {FaBars, FaShoppingCart, FaSearch} from "react-icons/fa";
import {MenuList, MenuItem, MenuButton, Dropdown, SubMenuItem} from "react-menu-list";

import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";

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
    width : '40px'
  },
  searchButton : {
    position : 'absolute',
    right : '0px',
    bottom : '-8px'
  },
  search : {
    // borderBottom : '1px solid darkblue',
    fontStyle : 'italic',
    lineHeight : 0,
    paddingLeft : '25px',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing.unit,
  },
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





class TopNav extends React.Component {
  state = {
    collapseIsOpen : false
  };
  
  flipCollapsingMenu = () => {
    this.setState({
      collapseIsOpen : !this.state.collapseIsOpen
    })
  };
  
  render() {
    const {classes} = this.props;
  
    return (
      <React.Fragment>
        <AppBar position='static' className={ classes.root }>
          <OuterContainer>
            <IconButton
              className={ classes.menuButton }
              onClick={ this.flipCollapsingMenu }
            >
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
  }
}

export default withStyles(styles)(TopNav);

