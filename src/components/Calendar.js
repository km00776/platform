import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import MomentUtils from '@date-io/moment';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function MaterialUIPickers() {
    // The first commit of Material-UI
    const [fromselectedDate, setfromSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [toselectedDate, settoSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    
    const handleFromDateChange = (date) => {
        setfromSelectedDate(date);
    };
    const handleToDateChange = (date) => {
        settoSelectedDate(date);
    };
  
    return (
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Grid container justify="space-around">
          
          <KeyboardDatePicker style = {{width: "140px"}}
            backgroundColor='White'
            disableToolbar
            variant="inline"
            format="DD/MM/YYYY"
            
            margin="normal"
            width="10px"
            id="date-picker-inline"
            label="From"
            value={fromselectedDate}
            onChange={handleFromDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
           <KeyboardDatePicker style = {{width: "140px"}}
            disableToolbar
            variant="inline"
            format="DD/MM/YYYY"
            margin="normal"
            id="date-picker-inline"
            label="To"
            value={toselectedDate}
            onChange={handleToDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        
        </Grid>
      </MuiPickersUtilsProvider>
    );
  }