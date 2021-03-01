import React from 'react';
import { makeStyles, ThemeProvider, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Fragment, useEffect, useState } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Chip from '@material-ui/core/Chip';

import {ContainedButtons} from './reuseableButton';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#ec407a',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const tableBadge = createMuiTheme({
  palette: {
    primary: {
      main: '#FFFFFF	',
    
    },
    secondary: {
      main: '#7f0000',
      color: 'white'
    },
  },
});

const theme = createMuiTheme();

const useStyles = makeStyles({
  [theme.breakpoints.only('lg')]: {
  
  table: {
    minWidth: 700,
   
  },
  container: {
    maxHeight: 360  ,
  },
},
  [theme.breakpoints.up('xl')]: {
  
    table: {
      minWidth: 700,
     
    },
    container: {
      maxHeight: 440,
    },
  
  }

});


export default function StickyHeadTable(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const [clients, setClients] = useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(2);


// need to adjust this data
    const getClients = async () => {
        try { 
          if(props.clients.length === 0) {
             const response = await fetch("/clients");
             const jsonData = await response.json();
             setClients(jsonData);
          }
          else {
            console.log(props.clients);
            setClients(props.clients);

          }
          
            console.log(clients); 
          
        }
        catch (err) {
            console.error(err.message);
        }
  }


  

  

    useEffect(() => {
        getClients();

    },)

   

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);

    
  };
  

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table  stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow >
              <StyledTableCell style={{ backgroundColor: '#002155' }} align="left">Name</StyledTableCell>
              <StyledTableCell style={{ backgroundColor: '#002155' }} align="left">Country</StyledTableCell>
              <StyledTableCell style={{ backgroundColor: '#002155' }}align="left">Date Created</StyledTableCell>
              <StyledTableCell style={{ backgroundColor: '#002155' }}align="left">Active</StyledTableCell>
              <StyledTableCell style={{ backgroundColor: '#002155' }}align="left">Archive</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {clients.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
               <a style={{color: 'Black'}}href="google"> {row.name} </a>
              </StyledTableCell>
              <StyledTableCell align="left">{row.country}</StyledTableCell>
              <StyledTableCell align="left">{row.datecreated}</StyledTableCell>
              <StyledTableCell align="left"><ThemeProvider theme={tableBadge}><Chip variant="outlined"  style = {{backgroundColor: '#4caf50'}} color="primary" size="small" label="Active" /></ThemeProvider></StyledTableCell>
              <StyledTableCell align="left">Archive</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        </Table>
      
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[0, 4, 5, 8]}
        component="div"
        count={clients.length}  
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
 
    </Paper>
  );
}