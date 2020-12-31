import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Fragment, useEffect, useState } from 'react';

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



const useStyles = makeStyles({
  table: {
    minWidth: 700,
   
  },
  container: {
    maxHeight: 373  ,
  },

});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(6);

  const [clients, setClients] = useState([]);

    const getClients = async () => {
        try {
            const response = await fetch("http://localhost:5000");
            const jsonData = await response.json();

            setClients(jsonData);
        }
        catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getClients();
    }, [])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(4);
    setPage(event.target.value);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead style={{ color: '#ec407a' }}>
            <TableRow>
          
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Country</StyledTableCell>
              <StyledTableCell align="left">Date Created</StyledTableCell>
              <StyledTableCell align="left">Active</StyledTableCell>
              <StyledTableCell align="left">Archive</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {clients.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.country}</StyledTableCell>
              <StyledTableCell align="left">{row.datecreated}</StyledTableCell>
              <StyledTableCell align="left">Active</StyledTableCell>
              <StyledTableCell align="left">Archive</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 8]}
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