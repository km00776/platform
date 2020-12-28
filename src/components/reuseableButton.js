import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <div> 
      <Button style={{width:"90px"}} variant="contained" color="primary">
        Search
      </Button>
      <Button style={{width:"90px", marginRight: '20px'}} variant="contained" color="primary">
        Clear
      </Button>
      </div>
    </div>
  );
}