import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';import TextField from '@material-ui/core/TextField';
import styles from '../styles/ContactForm.module.scss';



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '22.5ch',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
        borderColor: 'white',
        },
    },
  
           
    }
  }));

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#00224b'
      }
    },
  });

  const theme2 = createMuiTheme({
    palette: {
      primary: {
        main: '#00fa9a'
      },
    
    },
  }); 
  

  export function BasicTextFields() {
    const classes = useStyles();
    const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };



    return (
    <form className={classes.root} noValidate autoComplete="off">
      <ThemeProvider theme={theme}>
        <TextField 
            id="filled-basic"
            label="Your Name" 
            variant="filled"
        />
        <TextField className={styles.TextField} id="filled-basic" label="University/institution" variant="filled" /> 
        <TextField color='red' id="filled-basic" label="Your Email" variant="filled" />
        <TextField color='red' id="filled-basic" label="Login Code" variant="filled" />
        <TextField 
          id="standard-multiline-flexible" 
          label="Issues Facing" 
          variant="filled" 
          multiline value={value}
          rowsMax={2}
          onChange={handleChange} />
         </ThemeProvider>
       </form>
    );
  }

  export function ContainedButtons() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
      <ThemeProvider theme= {theme2}>
        <Button color="primary" variant="contained">Submit</Button>
      </ThemeProvider>
      </div>
    );
  }