import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { createStyles, makeStyles } from "@material-ui/styles";
import React, { FC } from 'react';
import logout from '../authentication/Logout';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    head: {
      flexGrow: 2,
    },
  })
);

const Navbar: FC = () => {

  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' className={classes.head} sx={{ flexGrow: 1 }}>
          SAMOSIT Election System
        </Typography>
        <Button color='inherit' onClick={()=>{logout()}}>Logout</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
