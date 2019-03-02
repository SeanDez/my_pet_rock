import React from "react";
import {FaBars, FaShoppingCart, FaSearch} from "react-icons/fa";

import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

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


class TopNav extends React.Component {
  state = {
    anchorElement : null
  };
  
  handleClick = event => {
    this.setState({ anchorElement : event.currentTarget })
    // this sets the button as the anchor element for the menu
  };
  
  handleClose = () => {
    this.setState({ anchorElement : null })
  };
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState !== this.state) {
      console.log(this.state, `=====this.state=====`);
    }
  }
  
  render() {
    const {classes} = this.props;
    const {anchorElement} = this.state;
    
    return (
      <React.Fragment>
        <AppBar position='static' className={ classes.root }>
          <OuterContainer>
            <IconButton
              className={ classes.menuButton }
              onClick={this.handleClick}
            >
              <FaBars size='1.5rem' />
            </IconButton>
            <Menu
              anchorEl={anchorElement}
              open={Boolean(anchorElement)}
              onClose={this.handleClose}
            >
              <MenuItem
                onClick={this.handleClose}
              >Home</MenuItem>
              <MenuItem
                onClick={this.handleClose}
              >Browse Products</MenuItem>
              <MenuItem
                onClick={this.handleClose}
              >Registry</MenuItem>
              <MenuItem
                // onClick={this.handleClose}
                checked={true}
                menuItems={[
                  <MenuItem
                    primaryText='Pet Rocks'
                  />,                  <MenuItem
                    primaryText='Support Rocks'
                  />
                ]}
              >Shopping Cart</MenuItem>
              <MenuItem
                onClick={this.handleClose}
              >Sign In</MenuItem>
              <MenuItem
                onClick={this.handleClose}
              >New Account</MenuItem>
            </Menu>
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

