import { useState } from "react";
import "./formInput.css";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
      <InputLabel variant="standard" htmlFor="uncontrolled-native">
        {label}
        </InputLabel><NativeSelect
          defaultValue={''}
          inputProps={{
            name: 'tower',
            id: 'uncontrolled-native',
          }}
        >
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
      />
      <span>{errorMessage}</span>
      </NativeSelect>
      </FormControl>
    </Box>
    </div>
  );
};

export default FormInput;
