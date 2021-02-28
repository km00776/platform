import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import styles from '../styles/ClientSetup.module.scss';
import styles1 from '../styles/ClientDetails.module.scss';
import SchoolIcon from '@material-ui/icons/School';
import StickyHeadTable from './tableClients';
import {ContainedButtons} from './reuseableButton';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import Calendar from './Calendar';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import { ClientDetailsFields } from './SupportForm';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      [theme.breakpoints.down('md')]: {
        width: theme.spacing(30),
        height: theme.spacing(40),
        margin: theme.spacing(3),
      },
      // this is for my mac 1440 x 900p
      [theme.breakpoints.only('lg')]: {
        width: theme.spacing(44),
        height: theme.spacing(20),
        margin: theme.spacing(1),
        position: 'relative',
      },
      // this is for 1920 x 1080
      [theme.breakpoints.up('xl')]: {
        width: theme.spacing(55),
        height: theme.spacing(24),
        margin: theme.spacing(1),
        position: 'relative',
      },
    },
  },

}));

const useStyles2 = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      [theme.breakpoints.down('md')]: {
        width: theme.spacing(10),
        height: theme.spacing(40),
        margin: theme.spacing(3),
      },
      [theme.breakpoints.only('lg')]: {
        width: theme.spacing(135.8),
        height: theme.spacing(30),
        margin: theme.spacing(1),
        position: 'relative'
      },
      [theme.breakpoints.only('xl')]: {
        width: theme.spacing(169),
        height: theme.spacing(32),
        position: 'relative'
      },

    },

  },

}));
const useStyles3 = makeStyles((theme) => ({
  root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
          [theme.breakpoints.down('md')]: {
              width: theme.spacing(10),
              height: theme.spacing(40),
              margin: theme.spacing(3),
          },
          [theme.breakpoints.only('lg')]: {
              width: theme.spacing(135.8),
              height: theme.spacing(60),
              margin: theme.spacing(1),
              position: 'relative'
          },
          [theme.breakpoints.only('xl')]: {
              width: theme.spacing(169),
              height: theme.spacing(69),
              position: 'relative'
          },

      },
  },

}));





export function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper style={{  backgroundColor: 'rgb(255, 255, 255)' }} elevation={7}>
        <EqualizerIcon style={{ fontSize: 90, color: '#f50057' }} />
        <h2 className={styles.papertext}>142</h2>
        <h3 className={styles.totalClients}>Total Clients</h3>
      </Paper>
      <Paper style={{ backgroundColor: 'white' }} elevation={7}>
        <ImportContactsIcon style={{ fontSize: 80, color: '#536dfe' }} />
        <h2 className={styles.papertext2}>90</h2>
        <h3 className={styles.totalUniversityClients}>University Clients</h3>
      </Paper>
      <Paper style={{ backgroundColor: 'white' }} elevation={7}>
        <SchoolIcon style={{ fontSize: 80, color: '#ffa733' }} />
        <h2 className={styles.papertext3}>52</h2>
        <h3 className={styles.totalSchoolClients}>School Clients</h3>
      </Paper>
    
    </div>

  );
}

export function SimplePaper2({history}) {
  const classes2 = useStyles2();
  const classes3 = useStyles3();
  const [name, setName] = React.useState('');
  const [Country, setCountry] = React.useState('');
  const [clients, setClients] = React.useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
      try {
        const response = await fetch(`/client/?name=${name}`);
        const parseResponse = await response.json();
        console.log(parseResponse);
        setClients(parseResponse);
      }
      catch(error) {
        console.error(error.message);
      }
  }; 

  return (
  
    <div className={classes2.root}>
      {/* <form onSubmit={e => onSubmit(e)}>  */}
      <Paper style={{ backgroundColor: 'white' }} elevation={7}>
      
        <div className={styles.leftContainer}>
          <div className={styles.find}>
            <div className={styles.labelFind}>
              <label>Find</label>
            </div>
            <div className={styles.inputFind}>
              <input></input>
            </div>
          </div>
          <div className={styles.name}>
            <div className={styles.labelName}>
              <label>Name</label>
            </div>
            <div className={styles.inputName}>
            <form onSubmit= {handleSearch}>  
              <input type="text" name="name"  value= {name} onChange={e => setName(e.target.value)}></input>
              <button>hi</button>
              </form>
            </div>
          </div>
          <div className={styles.active}>
            <div className={styles.labelActive}>
              <label>Active</label>
            </div>
            <div classname={styles.inputActive}>
              <select>
                <option value="0">All</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
              </select>
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.country}>
            <div className={styles.labelCountry}>
              <label>Country</label>
            </div>
            <div className={styles.inputCountry}>
              <input value={Country} onChange={e => setCountry(e.target.value)}></input>
            </div>
          </div>
          <div className={styles.Type}>
            <div className={styles.labelType}>
              <label>Type</label>
            </div>
            <div className={styles.inputType}>
              <select>
                <option test="0">All</option>
                <option test="1">Yes</option>
                <option test="2">No</option>
              </select>
            </div>
          </div>
          <div className={styles.Archived}>
            <div className={styles.labelArchived}>
              <label>Archived</label>
            </div>
            <div className={styles.inputArchived}>
              <select>
                <option value="0">All</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
              </select>
            </div>
          </div>
          <div className={styles.Calender}>
            <Calendar />
          </div>
          <div className={styles.btn}>
            <div className={styles.searchBtn}>
              <ContainedButtons className={styles.searchBtn} label="Search" />
            </div>
            <div className={styles.clearBtn}>
              <ContainedButtons className={styles.clearBtn} label="Clear" />
            </div>
           
          </div>

        </div>
        
      </Paper>
      <StickyHeadTable clients = {clients} />
      <div className={styles.Pagination}>
                            <form>
                                <ContainedButtons onClick={() => history.push('/Detail')} className={styles.addBtn} label="ADD NEW" />
                            </form>
                        </div>

    </div>
      
  );
}



