import React from 'react';
import TextField from '@material-ui/core/TextField';

export interface TextBoxProps extends React.HTMLAttributes<HTMLButtonElement>{
    name: string
    placeholder: string
    value: any
    lable: string
    styles?: any  
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void  
    [key: string]: any
}

export const TextBox: React.FC<TextBoxProps> = ({ placeholder, name, value, lable, styles, handleChange}) => (
  <TextField
  id={name}
  lable={lable}
  margin="normal"
  placeholder= {placeholder}
  value={value}
  className={styles}
  onChange={handleChange}
  />
);
