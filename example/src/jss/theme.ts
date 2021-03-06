import {
  createMuiTheme,
} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#96122E',
    },
    secondary: {
      main: '#821028',
      light: '#98AFB7',
    },
  },
  typography: {
    fontFamily: 'Lato',
    h1: {
      fontWeight: 600,
      fontSize: '1.8rem',
      lineHeight: '1.22',
      color: '#50545a',
    },
    h2: {
      fontWeight: 500,
      fontSize: '1.1rem',
      color: '#383B41',

    },
    h4: {
      fontWeight: 600,
      fontSize: '1.7rem',
    },
    h5: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '1.2rem',
      lineHeight: '24px',
      color: '#212121',
    },
    h6: {
      fontSize: '1.1rem',
      lineHeight: '1.9rem',
    },
    body1: {
      color: '#5a5a5a',
    }
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;