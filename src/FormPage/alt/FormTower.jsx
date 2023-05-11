import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const FormTower = ({onChange})=> {
   const towers = ['','A','Б']
   const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Box>
      <FormControl fullWidth sx={{mt:3}}
      onCubmit={handleSubmit}
    > 
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Башня
        </InputLabel>
        <NativeSelect
          onChange={onChange}
          name="tower"
        >
          {
            towers.map((item)=>{
              return (
              <option 
              key={item}
              value={item}>{item}</option>)
            })
          }
        </NativeSelect>
      </FormControl>
    </Box>
  );
}

export default FormTower