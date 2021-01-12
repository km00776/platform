import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(),
     
    },
  },
}));



export default function ContainedButtons(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <div> 
      <Button onClick={props.onClick} style={{backgroundColor: '#ff1744', color: 'white', width: '100px'}}  className={props.className}  variant="contained">
        {props.label}
      </Button>
      </div>
    </div>
  );
}