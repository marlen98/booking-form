import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const FormTower = (props)=> {
   const towers = {
        a:'A',
        b:'B'
    }
    
  return (
    <Box sx={{ maxWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Башня
        </InputLabel>
        <NativeSelect
          defaultValue={''}
          inputProps={{
            name: 'tower',
            id: 'uncontrolled-native',
          }}
        >
          <option value={towers.a}>{value}</option>
          <option value={towers.b}>{value}</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}

export default FormTower