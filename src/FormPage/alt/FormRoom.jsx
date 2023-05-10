import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const FormRoom = (props)=> {
    const rooms = [1,2,3,4,5,6,7,8,9,10]
  return (
    <Box sx={{ maxWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Переговорная
        </InputLabel>
        <NativeSelect
          defaultValue={''}
          inputProps={{
            name: 'tower',
            id: 'uncontrolled-native',
          }}
        >
            { rooms.map((item)=>{
          return  <option >{item}</option>
        })
          
        }
          
        </NativeSelect>
      </FormControl>
    </Box>
  );
}

export default FormRoom