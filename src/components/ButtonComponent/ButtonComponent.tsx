import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

export interface ButtonComponentProps extends React.HTMLAttributes<HTMLButtonElement>{
  buttonTitle?: string;
  disabled?: boolean;
  buttonVariant: "text" | "outlined" | "contained" | undefined;  
  styles?: any;
  color: "inherit" | "primary" | "secondary" | "default" | undefined;
  [key: string]: any;
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({ buttonTitle, disabled, buttonVariant,color,styles, ...props}) => (
  <Button 
  { ...props}
  color={color}
  variant={buttonVariant}
  disabled={disabled}
  className={styles}>
  {buttonTitle}
  </Button>
);
