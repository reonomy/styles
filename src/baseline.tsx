import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from './globals/typography';

interface StyleProps {
  children?: React.ReactElement;
  fontDirectory?: string;
}

const withReonomyStyles = (fontDirectory='') => makeStyles({
  '@global': {
    ...Typography(fontDirectory)
  },
});

function ReonomyCssBaseline({ children, fontDirectory }: StyleProps) {
  withReonomyStyles(fontDirectory)();
  return <React.Fragment>{ children }</React.Fragment>;
}

export default ReonomyCssBaseline;