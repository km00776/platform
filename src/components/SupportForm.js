import React from 'react';
import Button from '@material-ui/core/Button';
import {
  ThemeProvider,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



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
      button: {
        textTransform: "none"
      }
  
           
    }
  }));

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#00224b'
      },
      typography: {
        button: {
          textTransform: 'none'
        }
      }
    },
  });

  const theme2 = createMuiTheme({
    palette: {
      primary: {
        main: '#00fa9a'
      },
      typography: {
        button: {
          textTransform: 'none'
        }
      }
    
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
        <TextField id="filled-basic" label="University/Institution" variant="filled" /> 
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
      <ThemeProvider theme={theme2}>
        <Button  className={classes.button} color="primary" variant="contained">SUBMIT</Button>
      </ThemeProvider>
      </div>
    );
  }