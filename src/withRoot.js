import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import grey from 'material-ui/colors/grey';
import Reboot from 'material-ui/Reboot';

const theme = createMuiTheme( {
  palette: {
    primary: {
      light: grey[ 300 ],
      main: grey[ 500 ],
      dark: grey[ 700 ],
      contrastText: '#fff',
    },
    secondary: {
      light: blue[ 300 ],
      main: blue[ 500 ],
      dark: blue[ 700 ],
      contrastText: '#000',
    },
  },
} );

function withRoot( Component ) {
  function WithRoot( props ) {
    return (
      <MuiThemeProvider theme={theme}>
        <Reboot />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
