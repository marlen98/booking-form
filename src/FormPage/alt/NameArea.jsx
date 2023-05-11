import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const NameArea = ({onChange})=> {
  return (
    <Box
    sx={{mt:3}}
      component="form"
      noValidate
      autoComplete="off"
    >
      <div>
      
      <TextField
           name="name"
          onChange={onChange}
          required
          id="standard-required"
          label="Введите своё имя"
          variant="standard"
          sx={{minWidth:'300px'}}
        />
      </div>
    </Box>
  );
}

export default NameArea
