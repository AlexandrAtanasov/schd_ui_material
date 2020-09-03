import Link from 'next/link'

import React, { useState, useEffect } from 'react';
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
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


// icons
import AssignmentIcon from '@material-ui/icons/Assignment';
import ScheduleIcon from '@material-ui/icons/Schedule';
import SettingsIcon from '@material-ui/icons/Settings';
import InfoIcon from '@material-ui/icons/Info';

import MoreVertIcon from '@material-ui/icons/MoreVert';



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

  // set menu for Select App
  const [currentPage, setCurrentPage] = useState(null)
  useEffect( () => {
    pageName == 'SCHD' ? setCurrentPage('TSKS') : setCurrentPage('SCHD')
  });
  
  // Select App
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick_select_app = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose_select_app = () => {
    setAnchorEl(null);
  };
  //

  // User menu
  const [anchorE2, setAnchorE2] = React.useState(null);
  const open_user_menu = Boolean(anchorE2);

  const handleMenu_user_menu = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleClose_user_menu = () => {
    setAnchorE2(null);
  };
  //

return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          
          {/* Select App */}
          <div>
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick_select_app}
              style={{color: "white"}}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose_select_app}
              PaperProps={{
                style: {
                  width: '20ch',
                },
              }}
            >
              <Link href={`/second/${currentPage}`}>
                <a>
                  <MenuItem onClick={handleClose_select_app}>
                    <span style={{marginLeft: "1rem"}}>{currentPage}</span>
                  </MenuItem>
                </a>
              </Link>
            </Menu>
          </div>
          
          {/* Page name */}
          <Typography variant="h6" className={classes.title}>
            {pageName}
          </Typography>

          {/* Settings menu */}
          <div>
            <Link href="/second/settings">
              <a>
                <IconButton
                  aria-label="settings of current app"
                  aria-controls="settings-app"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <SettingsIcon />
                </IconButton>
              </a>
            </Link>
          </div>

          {/* User menu */}
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu_user_menu}
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
              open={open_user_menu}
              onClose={handleClose_user_menu}
            >
              <MenuItem onClick={handleClose_user_menu}>User</MenuItem>
              <MenuItem onClick={handleClose_user_menu}>Logout</MenuItem>
            </Menu>
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}
