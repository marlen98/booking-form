import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DataPicker = ()=> {
  return (
    <LocalizationProvider dateAdapter={''}>
      <DatePicker />
    </LocalizationProvider>
  );
}

export default DataPicker
