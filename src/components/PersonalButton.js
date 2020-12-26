 
 import React from 'react';
 import Button from '@material-ui/core/Button';
 import styles from '../styles/App.module.scss';
 import {
    fade,
    ThemeProvider,
    withStyles,
    makeStyles,
    createMuiTheme,
  } from '@material-ui/core/styles';
  import { green, purple } from '@material-ui/core/colors';



 
const theme3 = createMuiTheme({      
    typography: {
      button: {
        textTransform: 'none'
      }
    }
  });
 
 export default function DisableElevation(props) {
    return(
    <ThemeProvider theme={theme3}>
      <Button size="Medium" label={props.label} className={props.className} variant="contained" color="primary">
           {props.label}
      </Button>
      </ThemeProvider>
    );
  }