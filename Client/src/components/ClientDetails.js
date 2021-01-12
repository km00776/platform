
import React, { Fragment, useState } from "react";
import styles from '../styles/ClientDetails.module.scss';
import { PermanentDrawerLeft } from './DrawerComponent';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(134),
      height: theme.spacing(90),
    },
  },
}));

// for form text field;
const textUseStyles =   makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(3),
      width: '20ch',
    },
  },
}));


const AddClient = () => {
  const [name, setName] = useState("Platform");
  const [country, setCountry] = useState("United Kingdom");
  

  const classes = useStyles();

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { name, country };
   
      const response = await fetch("/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/Clients";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div className={styles.background}>
      <PermanentDrawerLeft />
      <div className={styles.HeadingContainer}>
          <h1 className={styles.Heading}>Client Details</h1>
      </div>
      <div className={styles.contactFormContainer}>
        <div className={classes.root}>
          <Paper elevation = {7}>
            <form onSubmit={onSubmitForm}>
        <TextField
          id="outlined-helperText"
          label="Client Name"
          onChange={(e => setName(e.target.value))}
          variant="outlined"
          style={{display: "flex"}}
        />
        <br></br>
        <TextField
          id="outlined-helperText"
          label="Country"
          onChange={(e => setCountry(e.target.value))}
          variant="outlined"
          style={{display: "flex"}}
        />
         <br></br>
        {/* <TextField
          id="outlined-helperText"
          label="Client Name"
          onChange={(e => setName(e.target.value))}
          variant="outlined"
          style={{display: "flex"}}
        />
         <br></br>
        <TextField
          id="outlined-helperText"
          label="Client Name"
          onChange={(e => setName(e.target.value))}
          variant="outlined"
          style={{display: "flex"}}
        />
        <br></br>
         <TextField
          id="outlined-helperText"
          label="Client Name"
          onChange={(e => setName(e.target.value))}
          variant="outlined"
          style={{display: "flex"}}
        />
        <br></br>
         <TextField
          id="outlined-helperText"
          label="Client Name"
          onChange={(e => setName(e.target.value))}
          variant="outlined"
          style={{display: "flex"}}
        />
         <br></br>
         <TextField
          id="outlined-helperText"
          label="Client Name"
          onChange={(e => setName(e.target.value))}
          variant="outlined"
          style={{display: "flex"}}
        />
        <br></br>
         <TextField
          id="outlined-helperText"
          label="Client Name"
          onChange={(e => setName(e.target.value))}
          variant="outlined"
          style={{display: "flex"}}
        /> */}
        <button> Add</button>
            </form>
          </Paper>
            
          
          
        </div>
      </div>

      {/* <form className="d-flex" onSubmit={onSubmitForm}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form> */}
    </div>

  );
};

export default AddClient;