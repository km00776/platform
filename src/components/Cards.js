import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Pagination from '@material-ui/lab/Pagination';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import styles from '../styles/ClientSetup.module.scss';
import SchoolIcon from '@material-ui/icons/School';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import Divider from '@material-ui/core/Divider';
import BasicTable from './tableClients';
import ContainedButtons from './reuseableButton';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(3),
      width: theme.spacing(62),
      height: theme.spacing(15),

    },
    position: 'relative'
  },

}));

const useStyles2 = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(3),
      width: theme.spacing(198),
      height: theme.spacing(30),
    },
    position: 'relative'
  },

}));
const useStyles3 = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(3),
      width: theme.spacing(138),
      height: theme.spacing(60),

    },
  },

}));

const useStyles4 = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export function BasicPagination() {
  const classes4 = useStyles4();
  return (
    <div className={classes4.root}>

      <Pagination count={10} color="primary" />


    </div>
  );
}



export function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Paper style={{ backgroundColor: 'white' }} elevation={8}>
        <TrendingUpIcon style={{ fontSize: 118, color: 'lightgreen' }} />
        <h2 className={styles.papertext}>Total Clients</h2>

      </Paper>
      <Paper style={{ backgroundColor: 'white' }} elevation={8}>
        <ImportContactsIcon style={{ fontSize: 100, color: 'lightskyblue' }} />
        <h2 className={styles.papertext2}>Total University Clients</h2>
      
      </Paper>
      <Paper style={{ backgroundColor: 'white' }} elevation={8}>
        <SchoolIcon style={{ fontSize: 100, color: '#fed8b1' }} />
        <h2 className={styles.papertext3}>Total School Clients</h2>
        
      </Paper>


    </div>
  );
}

export function SimplePaper2() {
  const classes2 = useStyles2();

  return (
    <div className={classes2.root}>

      <Paper style={{ backgroundColor: 'white' }} elevation={8}>
        {/* <ContainedButtons /> */}
      </Paper>



    </div>
  );
}

export function SimplePaper3() {
  const classes3 = useStyles3();

  return (
    <div className={classes3.root}>

      <Paper style={{ backgroundColor: '#2E3B55' }} elevation={6}>
        {/* <BasicTable/> */}
        <div className={styles.Pagination}>

          <BasicPagination />
        </div>
      </Paper>



    </div>
  );
}