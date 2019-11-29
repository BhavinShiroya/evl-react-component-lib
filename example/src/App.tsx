import React, { Component } from 'react';
import {
  MuiThemeProvider,
  makeStyles,
  createStyles,
  Theme
} from '@material-ui/core/styles';
import theme from './jss/theme';
import { ButtonComponent } from './reactComponentLib';

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
  return (
    <MuiThemeProvider  theme={theme}>
      <ButtonComponent style={classes.root} buttonVariant="contained" color="primary" buttonTitle="Styled Component" disabled={false}/>
    </MuiThemeProvider >
  )
 }

// class App extends Component {
//   render() {  
//     return (
//       <MuiThemeProvider  theme={theme}>
//           <ButtonComponent style={classes.root} buttonVariant="contained" color="secondary" buttonTitle="Styled Component" disabled={false}/>
//       </MuiThemeProvider >     
//     );
//   }
// }


export default App;
