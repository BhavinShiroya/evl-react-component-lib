import React from 'react';
import {
  MuiThemeProvider,
  makeStyles,
  createStyles,
  Theme
} from '@material-ui/core/styles';
import theme from './jss/theme';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { ButtonComponent } from './reactComponentLib';
import {TextBox} from './reactComponentLib';


const useStyles = makeStyles((_theme: Theme) => createStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
}))

interface AppProps {
}

const App: React.SFC<AppProps> = (props) => {
  const classes = useStyles();

  const onClicks = () => {
    alert('youo have clicked button');
  };

  const handleChanges = () => {
    alert('ds');
  }
  return (
    <MuiThemeProvider  theme={theme}>
      <CssBaseline />      
      <Container fixed>      
        <Box m={2} ><ButtonComponent onClick={onClicks} buttonVariant="contained" color="primary" buttonTitle="Styled Component"/></Box>
        <Box m={2} ><ButtonComponent onClick={onClicks} buttonVariant="text" color="primary" buttonTitle="Styled Component"/></Box>
        <Box m={2} ><ButtonComponent onClick={onClicks} buttonVariant="outlined" color="primary" buttonTitle="Styled Component"/></Box>
        <Box m={2} ><ButtonComponent onClick={onClicks} styles={classes.root} buttonVariant="contained" color="primary" buttonTitle="Styled Component"/></Box>
        <Divider orientation="vertical" />
        <Box m={2} >
         <TextBox 
          name="demo"
          lable="test"
          placeholder="Create new component"
          value="1"         
          handleChange={handleChanges}
         />
        </Box>
      </Container> 
    </MuiThemeProvider >
  )
 }


export default App;
