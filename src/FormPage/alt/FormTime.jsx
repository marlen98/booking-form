import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';


const FormTime = ({onChange})=> {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateField']} sx={{mt:'20px'}
      }
      name='time'
      onChange={onChange}>
        <DateField 
        
        label="Дата сессии" />
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default FormTime