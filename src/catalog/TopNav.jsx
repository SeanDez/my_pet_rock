import React from "react";
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import {FaBars, FaShoppingCart} from "react-icons/fa";

import {withStyles} from '@material-ui/core/styles'

const styles = {
  root: {
    // flexGrow: 1,
    flexFlow: 'row wrap',
    justifyContent : 'space-between'
  },
  grow: {
    // flexGrow: 1,
  },
  menuButton: {
    // marginLeft: -12,
    // marginRight: 20,
    width: '40px'
  },
};

const TopNav = (props) => {
  const {classes} = props;
  
  return (
    <React.Fragment>
      <AppBar position='static' className={classes.root}>
        <IconButton className={classes.menuButton}>
          <FaBars size='1.5rem' />
        </IconButton>
        <IconButton className={classes.menuButton}>
          <FaShoppingCart size='1.5rem' />
        </IconButton>
      </AppBar>
    </React.Fragment>
  )
};

export default withStyles(styles)(TopNav);

