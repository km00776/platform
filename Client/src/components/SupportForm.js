import {useState}  from 'react';
import Button from '@material-ui/core/Button';

import MenuItem from '@material-ui/core/MenuItem';

import {
  ThemeProvider,
  MuiThemeProvider,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styles from '../styles/App.module.scss';
import { datePickerDefaultProps } from '@material-ui/pickers/constants/prop-types';

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

const useStyles2 = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '150.5ch',
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
    },
    typography: {
      button: {
        textTransform: 'none'
      },

    }
  },
});

const theme2 = createMuiTheme({
  palette: {
    primary: {
      main: '#fbfb40'
    },
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  }
});

export function ClientDetailsFields(props) {

  const [Name, setName] = useState("");

  const onClickForm = async e => {
    e.preventDefault();
    try {
      const body = { Name };
       await fetch("/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      console.log(body);
      window.location = "/";
    }
    catch (err) {
      console.log(err.message);
    }
  }



  const classes = useStyles2();
  const clientType = [
    {
      value: 'University',
      label: 'University',
    },
    {
      value: 'School',
      label: 'School',
    },

  ];
  return (
    <form onSubmit={onClickForm} className={classes.root} Validate autoComplete="off">
      <ThemeProvider theme={theme}>
         <TextField id="outlined-basic" select={props.select} value={Name} className="form-control" onChange={e => setName(e.target.value)} label={props.label} variant="outlined">
          {/* {clientType.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))} */}




        </TextField>
        
        <ContainedButtons  label="SAVE" />
      </ThemeProvider>
    </form>
  );
}

export function BasicTextFields() {
  const classes = useStyles();
  const [value, setValue] = useState('');

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
      <MuiThemeProvider theme={theme2}>
        <Button color="primary" variant="contained">SUBMIT</Button>
      </MuiThemeProvider>
    </div>
  );
}