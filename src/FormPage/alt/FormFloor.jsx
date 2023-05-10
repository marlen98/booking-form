import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const FormFloor = (props)=> {
    const floors = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]
  return (
    <Box sx={{ maxWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Этаж
        </InputLabel>
        <NativeSelect
          defaultValue={''}
          inputProps={{
            name: 'floor',
            id: 'uncontrolled-native',
          }}
        > { floors.map((item)=>{
          return  <option >{item}</option>
        })
          
        }
        </NativeSelect>
      </FormControl>
    </Box>
  );
}

export default FormFloor