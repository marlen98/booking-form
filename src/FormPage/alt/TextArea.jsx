import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const TextArea=({onChange})=> {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField 
      name="comment"
      sx={{mt:3}} 
      fullWidth 
      label="Комментарий" 
      id="fullWidth" 
      onChange={onChange}/>
    </Box>
  );
}
export  default TextArea