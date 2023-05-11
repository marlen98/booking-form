import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { useState } from 'react';

const FormFloor = ({onChange})=> {
    const floors = ['',3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]
   
const handleSubmit = (e) => {
  e.preventDefault();
};
    return (
    <Box>
      
      <FormControl fullWidth sx={{mt:3}}
      type="text"
      placeholder='Выберите этаж'
      onSubmit={handleSubmit}>
        <InputLabel 
        variant="standard" htmlFor="uncontrolled-native">
          Этаж
        </InputLabel>
        <NativeSelect
        onChange={onChange}
        name="floor"
        > { floors.map((item)=>{
          return  <option
          
          value={item} 
          key={item} >{item}</option>
        })
          
        }
        </NativeSelect>
      
      </FormControl>
    </Box>
  );
}

export default FormFloor