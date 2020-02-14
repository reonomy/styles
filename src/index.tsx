import React from 'react';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import ReonomyPalette from './palette';
import ReonomyCssBaseline from './baseline';
import ReonomyTheme from './theme';

interface StylesProps {
  children?: React.ReactElement,
  fontDirectory?: string
}

function ReonomyStyles({ children, fontDirectory }: StylesProps) {
  return (
    <MuiThemeProvider theme={ReonomyTheme}>
      <CssBaseline />
      <ReonomyCssBaseline fontDirectory={fontDirectory} />
      { children }
    </MuiThemeProvider>
  )
}

export { ReonomyPalette, ReonomyCssBaseline, ReonomyTheme };

export default ReonomyStyles;