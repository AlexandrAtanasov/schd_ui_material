import Link from 'next/link' 
import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function BasicButtonGroup() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Link href="/first/SCHD">
            <a>
                <Button  variant="contained" color="primary">
                    First
                </Button>
            </a>
        </Link>
        <Link href="/second/SCHD">
            <a>
                <Button variant="contained" color="secondary">
                    Second
                </Button>
            </a>
        </Link>
    </div>
  );
}
