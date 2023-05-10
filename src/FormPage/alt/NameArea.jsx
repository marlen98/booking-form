import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const NameArea = ()=> {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      
      <TextField
          required
          id="standard-required"
          label="Введите своё имя"
          variant="standard"
        />
      </div>
    </Box>
  );
}

export default NameArea
