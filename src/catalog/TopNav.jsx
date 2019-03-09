import React from "react";
import {FaBars, FaShoppingCart, FaSearch} from "react-icons/fa";
import {MenuList, MenuButton, Dropdown, SubMenuItem} from "react-menu-list";
import {Link} from "react-router-dom";

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
    justifyContent : 'space-between',
    zIndex : 0
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
    border : '1px dashed green',
    fontStyle : 'italic',
    lineHeight : 0,
    paddingLeft : '10px',
    paddingRight : '30px',
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
  subMenu1 : {
    paddingLeft : '10px'
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


const MobileMenuContainer = styled.div`
  @media (min-width : 418px) {
    display: none;
  }
`;

const ExpandedMenuContainer = styled.div`
  display: none;
  @media (min-width: 418px) {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;
    //border: 2px dashed wheat;
    min-width: 200px;
    margin: 0 5px;
    z-index: 1150;
  }
`;

const StyledMenuButton = styled(MenuButton)`
  background-color: transparent;
  border: transparent;
  margin: 1px 7px 0 7px;
  cursor: pointer;
  //border: 2px dashed lightgray;
  color: white;
  font-size: 1rem;
  letter-spacing: .03rem;
  padding: 0;
  z-index: 1150;
`;

const StyledSubMenuItem = styled(SubMenuItem)`
  z-index: 10;
  font-size: 1rem;
  color: rgba(10, 10, 10, .9);
  position: relative;
  padding: 13px 30px 13px 15px;
  &:hover {
    background-color: rgba(10, 10, 10, .08);
  }
`;

const StyledNavText = styled.p`
    margin: 0 7px;
`;


const InheritedStyledLink = styled(Link)`
  color: inherit;
  text-decoration: inherit;
`;


class TopNav extends React.Component {
  state = {
    catalogCollapseIsOpen : false,
    rocksCollapseIsOpen : false,
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
      // console.log(this.state, `=====this.state=====`);
    }
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.selectWidthSetting)
  }
  

  
  render() {
    const {classes} = this.props;
  
    return (
      <React.Fragment>
        <AppBar
          position='static'
          className={ classes.root }
          // style={{ zIndex : 0 }} set in 'root'
        >
          <OuterContainer>
          
            <MobileMenuContainer>
              <IconButton
                className={ classes.menuButton }
                onClick={ this.setMenuAnchor }
              >
                <FaBars size='1.5rem' />
              </IconButton>
            
              <Menu
                anchorEl={ this.state.menuAnchor }
                open={ Boolean(this.state.menuAnchor) } // true / false
                // onClick={this.removeMenuAnchor}
              >
                <InheritedStyledLink to='/'>
                  <MenuItem
                    onClick={ this.removeMenuAnchor }
                  >
                    Home
                  </MenuItem>
                </InheritedStyledLink>
                <MenuItem
                  onClick={ () => {
                    this.setState({
                      catalogCollapseIsOpen : ! this.state.catalogCollapseIsOpen,
                    });
                  } }>
                
                  {/* Browse Submenu (L1) */ }
                  <p>Browse Catalog</p>
                </MenuItem>
                <Collapse
                  in={ this.state.catalogCollapseIsOpen }
                  className={ classes.subMenu1 }
                >
                
                  {/* Rocks Submenu (L2) */ }
                  <MenuItem
                    onClick={ () => {
                      this.setState({
                        rocksCollapseIsOpen : ! this.state.rocksCollapseIsOpen,
                      });
                    } }
                  >Rocks</MenuItem>
                  <Collapse
                    in={ this.state.rocksCollapseIsOpen }
                    className={ classes.subMenu1 }
                  >
                    <InheritedStyledLink to='/pet-rocks'>
                      <MenuItem>Pet Rocks</MenuItem>
                    </InheritedStyledLink>
                    <InheritedStyledLink to='/support-rocks'>
                      <MenuItem>Support Rocks</MenuItem>
                    </InheritedStyledLink>
                  </Collapse>
                
                  <InheritedStyledLink to='/supplies'>
                    <MenuItem>Supplies (Inactive)</MenuItem>
                  </InheritedStyledLink>
                </Collapse>
                <InheritedStyledLink to='cart'>
                  <MenuItem onClick={ this.removeMenuAnchor }>Shopping Cart</MenuItem>
                </InheritedStyledLink>
                <InheritedStyledLink to='/registry'>
                  <MenuItem onClick={ this.removeMenuAnchor }>Registry</MenuItem>
                </InheritedStyledLink>
                <InheritedStyledLink to='sign-in'>
                  <MenuItem onClick={ this.removeMenuAnchor }>Sign In</MenuItem>
                </InheritedStyledLink>
              </Menu>
            </MobileMenuContainer>
          
            <ExpandedMenuContainer>
              <InheritedStyledLink to='/'>
                <StyledNavText>Home</StyledNavText>
              </InheritedStyledLink>
            
              <StyledMenuButton
                menu={
                  <Dropdown style={ {zIndex : 1150} }>
                    <MenuList style={ {zIndex : 1150} }>
                      <StyledSubMenuItem
                        style={ {zIndex : 1150} }
                        menu={
                          <Dropdown>
                            <MenuList>
                              <InheritedStyledLink to='/pet-rocks'>
                                <MenuItem onClick={ this.removeMenuAnchor }>
                                  Pet Rocks
                                </MenuItem>
                              </InheritedStyledLink>
                              <InheritedStyledLink to='/support-rocks'>
                                <MenuItem onClick={ this.removeMenuAnchor }>Support Rocks</MenuItem>
                              </InheritedStyledLink>
                            </MenuList>
                          </Dropdown>
                        }
                      >
                        Rocks
                      </StyledSubMenuItem>
                    </MenuList>
                  </Dropdown>
                }
              >
                Browse
              </StyledMenuButton>
              <InheritedStyledLink to='/cart'>
                <StyledNavText>Shopping Cart</StyledNavText>
              </InheritedStyledLink>
              <InheritedStyledLink to='/registry'>
                <StyledNavText>Registry</StyledNavText>
              </InheritedStyledLink>
              <InheritedStyledLink to='/sign-in'>
                <StyledNavText>Sign In</StyledNavText>
              </InheritedStyledLink>
            </ExpandedMenuContainer>
          
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

