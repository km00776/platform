 
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
  



 
const theme3 = createMuiTheme({      
    palette: {
        primary: {
            main: '#4079FB'
        }
    },
    typography: {
      button: {
        textTransform: 'none'
      }
    }
  });
 
 export default function DisableElevation(props) {
    return(
    <ThemeProvider theme={theme3}>
      <Button className={styles.me} onClick={props.onClick} size="Medium" label={props.label} color = 'primary' className={props.className} variant="contained">
            {props.label}
      </Button>
      </ThemeProvider>
    );
  }