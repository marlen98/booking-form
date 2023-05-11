import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const FormRoom = ({onChange})=> {
    const rooms = ['',1,2,3,4,5,6,7,8,9,10]
    const handleSubmit = (e) => {
      e.preventDefault();
    };
  return (
    <Box>
      <FormControl fullWidth sx={{mt:3}}
      onSubmit={handleSubmit}>
        <InputLabel 
        variant="standard" 
        htmlFor="uncontrolled-native">
        Переговорная
        </InputLabel>
        <NativeSelect
          onChange={onChange}
          name='room'
        >
            { rooms.map((item)=>{
          return  <option 
          name='room'
          value={item} 
          key={item}>{item}</option>
        })
          
        }
          
        </NativeSelect>
      </FormControl>
    </Box>
  );
}

export default FormRoom