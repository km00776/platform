
import React, { Fragment, useState } from "react";
import styles from '../styles/ClientDetails.module.scss';
import { PermanentDrawerLeft } from './DrawerComponent';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import {ContainedButtons, ContainedButtons2} from './reuseableButton';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(120),
      height: theme.spacing(144),
    },
  },
}));

// for form text field;
const textUseStyles = makeStyles((theme) => ({
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
  const [type, setType] = useState("All");

  const clientTypes = [
    {
      value: 'All',
      label: 'All'
    },
    {
      value: 'University',
      label: 'University'
    },
    {
      value: 'School',
      label: 'School'
    },
    {
      value: 'Test Centre',
      label: 'Test Centre'
    },

  ]

  const handleChange = (event) => {
    setType(event.target.value);
  };

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
          <Paper elevation={7}>
            <form onSubmit={onSubmitForm}>
              <br></br>
              <TextField
                id="outlined-helperText"
                label="Client Name"
                onChange={(e => setName(e.target.value))}
                variant="outlined"
                
                style={{ left:"30px", display: "flex", width:"900px" }}
              />
              <br></br>
              <TextField
                id="outlined-helperText"
                label="Country"
                onChange={(e => setCountry(e.target.value))}
                variant="outlined"
                style={{ left:"30px",display: "flex", width:"900px" }}
              />
              <br></br>
              <TextField
                id="outlined-helperText"
                label="Type"
                select
                onChange={handleChange}
                variant="outlined"
                style={{ left:"30px", display: "flex", width:"900px" }}
              >{clientTypes.map((option) => <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>)}
              </TextField>
              <br></br>
              <TextField
                id="outlined-helperText"
                label="Email"
                onChange={(e => setName(e.target.value))}
                variant="outlined"
                style={{left:"30px", display: "flex" , width:"900px"}}
              />
              <br></br>
              <TextField
                id="outlined-helperText"
                label="Email 2"
                onChange={(e => setName(e.target.value))}
                variant="outlined"
                style={{ left:"30px",display: "flex" , width:"900px"}}
              />
              <br></br>
              <TextField
                id="outlined-helperText"
                label="Address"
                onChange={(e => setName(e.target.value))}
                variant="outlined"
                style={{left:"30px", display: "flex" , width:"900px"}}
              />
              <br></br>
              <TextField
                id="outlined-helperText"
                label="Town"
                onChange={(e => setName(e.target.value))}
                variant="outlined"
                style={{ left:"30px",display: "flex", width:"900px" }}
              />
              <br></br>
              <TextField
                id="outlined-helperText"
                label="Postcode"
                onChange={(e => setName(e.target.value))}
                variant="outlined"
                style={{ left:"30px",display: "flex" , width:"900px"}}
              />
              <br></br>
              <TextField
                id="outlined-helperText"
                label="Contact First Name"
                onChange={(e => setName(e.target.value))}
                variant="outlined"
                style={{ left:"30px",display: "flex", width:"900px" }}
              />
              <br></br>
              <TextField
                id="outlined-helperText"
                label="Contact Last Name"
                onChange={(e => setName(e.target.value))}
                variant="outlined"
                style={{ left:"30px",display: "flex", width:"900px" }}
              />
              <br></br>
              <TextField
                id="outlined-helperText"
                label="Job title"
                onChange={(e => setName(e.target.value))}
                variant="outlined"
                style={{ left:"30px",display: "flex", width:"900px" }}
              />
              <br></br>
              <TextField
                id="outlined-helperText"
                label="Contact phone"
                onChange={(e => setName(e.target.value))}
                variant="outlined"
                style={{ left:"30px",display: "flex", width:"900px" }}
              />
              <br></br>
              <TextField
                id="outlined-helperText"
                label="Login"
                onChange={(e => setName(e.target.value))}
                variant="outlined"
                style={{ left:"30px",display: "flex", width:"900px" }}
              />
              <br></br>
              <TextField
                id="outlined-helperText"
                label="Password"
                onChange={(e => setName(e.target.value))}
                variant="outlined"
                style={{ left:"30px",display: "flex", width:"900px" }}
              />
              <br></br>
              <TextField
                id="outlined-helperText"
                label="Confirm Password"
                onChange={(e => setName(e.target.value))}
                variant="outlined"
                style={{ left:"30px",display: "flex", width:"900px" }}
              />
               <ContainedButtons2 className={styles.addBtn} label="CANCEL"></ContainedButtons2>
            </form>
            <ContainedButtons className={styles.addBtn} label="CANCEL"></ContainedButtons>
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