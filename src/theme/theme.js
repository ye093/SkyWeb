import { createMuiTheme } from '@material-ui/core/styles';
import { lightBlue, red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: lightBlue[500],
    },
    secondary: {
      main: lightBlue[300],
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    text: {
      primary: '#000000',
      secondary: '#212121',
      disabled: '#e0e0e0',
      hint: '#9e9e9e',
    }
  },
  typography: {
    fontSize: 12,
    h2: 18
  }

});

export default theme;