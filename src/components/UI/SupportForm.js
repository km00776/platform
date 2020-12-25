import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";

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
    notchedOutline: {
        borderWidth: "1px",
        borderColor: "yellow !important"
      }
           
    }
  }));


  export function BasicTextFields() {
    const classes = useStyles();
  
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <TextField 
            id="filled-basic"
            label="Your Name" 
            variant="filled"
           

          
        />
        {/* <TextField className={styles.TextField} id="filled-basic" label="University/institution" variant="filled" /> */}
        {/* <TextField color='red' id="filled-basic" label="Your Email" variant="filled" />
        <TextField color='red' id="filled-basic" label="Login Code" variant="filled" /> */}
       </form>
    );
  }

  const styles = {
    root: {
      background: "linear-gradient(45deg, #03254c 90%, 	#d0efff	10%)",
      borderRadius: 3,
      border: 0,
      color: "white",
      height: 48,
      padding: "0 30px",
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
    }
  };
  
  function ClassNames(props) {
    const { classes, children, className, ...other } = props;
  
    return (
      <Button className={clsx(classes.root, className)} {...other}>
        {children || "class names"}
      </Button>
    );
  }
  
  ClassNames.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string
  };
  
  export default withStyles(styles)(ClassNames);