import React from "react";
import {FaBars, FaShoppingCart, FaSearch} from "react-icons/fa";
import {MenuList, MenuButton, Dropdown, SubMenuItem} from "react-menu-list";

import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";

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

const StyledSubMenuItem = styled(SubMenuItem)`
  height: 24px;
  boxSizing: content-box;
  width: auto;
  overflow: hidden;
  whiteSpace: nowrap;
  // &$selected: {}
`;


class TopNav extends React.Component {
  state = {
    catalogCollapseIsOpen : false,
    windowWidth : null
  };
  

  setMenuAnchor = event => {
    this.setState({ menuAnchor : event.currentTarget })
  };
  
  removeMenuAnchor = () => {
    this.setState({ menuAnchor : null })
  };
  
  
  // componentDidMount() {
  //   this.updatePredicate();
  //   window.addEventListener("resize", this.updatePredicate);
  // }
  //
  // componentWillUnmount() {
  //   window.removeEventListener("resize", this.updatePredicate);
  // }
  //
  // updatePredicate() {
  //   this.setState({ isDesktop: window.innerWidth > 1450 });
  // }
  
  selectWidthSetting = () => {
    this.setState({
      windowWidth : window.innerWidth > 600 ? 'small' : 'expanded'
    })
  };
  
  componentDidMount() {
    this.selectWidthSetting();
    // update it every time there's a change on the resize event
    // arg 2 is a listener, a callback that receives the event object
    window.addEventListener('resize', this.selectWidthSetting)
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState !== this.state) {
      console.log(this.state, `=====this.state=====`);
    }
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.selectWidthSetting)
  }
  

  
  
  
  
  render() {
    const {classes} = this.props;
  
    return (
      <React.Fragment>
        <AppBar position='static' className={ classes.root }>
          <OuterContainer>
            <IconButton
              className={ classes.menuButton }
              onClick={ this.setMenuAnchor }
            >
              <FaBars size='1.5rem' />
            </IconButton>
            
          <Menu
            anchorEl={this.state.menuAnchor}
            open={Boolean(this.state.menuAnchor)} // true / false
            // onClick={this.removeMenuAnchor}
          >
            <MenuItem onClick={this.removeMenuAnchor}>Home</MenuItem>
            <MenuItem
              onClick={() => {
              this.setState({
                catalogCollapseIsOpen : !this.state.catalogCollapseIsOpen
              });
            }}>
              <p>Browse Catalog</p>
            </MenuItem>
            <Collapse in={this.state.catalogCollapseIsOpen}>
              <MenuItem>1</MenuItem>
            </Collapse>
            <MenuItem onClick={this.removeMenuAnchor}>Shopping Cart</MenuItem>
            <MenuItem onClick={this.removeMenuAnchor}>Registry</MenuItem>
            <MenuItem onClick={this.removeMenuAnchor}>Sign In</MenuItem>
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

