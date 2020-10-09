import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import ReonomyPalette from './palette';
import ReonomyCssBaseline from './baseline';
import ReonomyTheme from './theme';

interface StylesProps {
  children?: React.ReactElement;
}

function ReonomyStyles({ children }: StylesProps) {
  return (
    <MuiThemeProvider theme={ReonomyTheme}>
      <ReonomyCssBaseline />
      {children}
    </MuiThemeProvider>
  );
}

export { ReonomyPalette, ReonomyCssBaseline, ReonomyTheme };

export * from './ionicons';

export default ReonomyStyles;
