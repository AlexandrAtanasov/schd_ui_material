import Link from 'next/link'

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

// icons
import AssignmentIcon from '@material-ui/icons/Assignment';
import ScheduleIcon from '@material-ui/icons/Schedule';
import SettingsIcon from '@material-ui/icons/Settings';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export function NavbarComponent( {pageName} ) {
  const classes = useStyles();
  
  // page name
  // const [pageName, setPageName] = React.useState(name="Main Page");
 

  // app-menu
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick_app_menu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose_app_menu = () => {
    setAnchorEl(null);
  };
  
  // account menu app-bar
  const [anchorE2, setAnchorE2] = React.useState(null);
  const open = Boolean(anchorE2);

  const handleMenu = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorE2(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton 
            edge="start" 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="menu"
            aria-controls="app-menu" 
            aria-haspopup="true" 
            onClick={handleClick_app_menu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="app-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose_app_menu}
          >
            <Link href="/first/SCHD">
              <a>
                <MenuItem onClick={handleClose_app_menu}>
                  <ScheduleIcon /> <span style={{marginLeft: "1rem"}}>SCHD</span>
                </MenuItem>
              </a>
            </Link>

            <Link href="/first/TSKS">
              <a>
                <MenuItem onClick={handleClose_app_menu}>
                  <AssignmentIcon /> <span style={{marginLeft: "1rem"}}>TSKS</span>
                </MenuItem>
              </a>
            </Link>

            <Link href="/first/settings">
              <a>
                <MenuItem onClick={handleClose_app_menu}>
                  <SettingsIcon /> <span style={{marginLeft: "1rem"}}>Settings</span>
                </MenuItem>
              </a>
            </Link>

            <Link href="/first/information">
              <a>
                <MenuItem onClick={handleClose_app_menu}>
                  <InfoIcon /> <span style={{marginLeft: "1rem"}}>Information</span>
                </MenuItem>
              </a>
            </Link>
          </Menu>

          <Typography variant="h6" className={classes.title}>
            {pageName}
          </Typography>

          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorE2}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>User</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
