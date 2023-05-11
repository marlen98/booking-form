import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const FormDate = ({onChange})=> {
    const dates = [
        '10:00-11:00',
        '11:00-12:00',
        '12:00-13:00',
        '13:00-14:00',
        '14:00-15:00',
        '15:00-16:00',
    ]
  return (
    <Box>
      <FormControl fullWidth sx={{mt:3}}>
        <InputLabel 
        variant="standard" 
        htmlFor="uncontrolled-native">
        Время сессии
        </InputLabel>
        <NativeSelect
          onChange={onChange}
          name='date'
        >
            { dates.map((item)=>{
          return  <option >{item}</option>
        })
          
        }
          
        </NativeSelect>
      </FormControl>
    </Box>
  );
}

export default FormDate