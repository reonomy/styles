import React from 'react';
import { makeStyles, CssBaseline } from '@material-ui/core';
import ReonomyTheme from './theme';
import Labels from './globals/labels';
import Utils from './globals/utils';
import Typography from './globals/typography';
import Leaders from './globals/leaders';
import MTAs from './globals/mta-icons';

interface StyleProps {
  children?: React.ReactElement;
}
const withReonomyStyles = () =>
  makeStyles({
    '@global': {
      ...Leaders(ReonomyTheme),
      ...Typography,
      ...Labels,
      ...Utils,
      ...MTAs
    }
  });

function ReonomyCssBaseline({ children }: StyleProps) {
  withReonomyStyles()();
  return (
    <React.Fragment>
      <CssBaseline />
      {children}
    </React.Fragment>
  );
}

export default ReonomyCssBaseline;
