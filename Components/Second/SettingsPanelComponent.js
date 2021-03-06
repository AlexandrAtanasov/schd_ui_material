import React from 'react';
import Link from 'next/link'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SettingsPanelComponent() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const links = (
    <div>
      <p>Go back to:</p>
      <Link href="/second/TSKS">
        <a>
          <span style={{marginLeft: "1rem"}}>TSKS</span>
        </a>
      </Link>

      <Link href="/second/SCHD">
        <a>
          <span style={{marginLeft: "1rem"}}>SCHD</span>
        </a>
      </Link>

      <Link href="/">
        <a>
          <span style={{marginLeft: "1rem"}}>Intro page</span>
        </a>
      </Link>
    </div>
  )

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label=" Settings parameters #1" {...a11yProps(0)} />
          <Tab label=" Settings parameters #2" {...a11yProps(1)} />
          <Tab label="Other Settings" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Settings parameters #1 ...
        {links}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Settings parameters #2 ...
        {links}
      </TabPanel>
      <TabPanel value={value} index={2}>
        Other settings ...
        {links}
      </TabPanel>
    </div>
  );
}