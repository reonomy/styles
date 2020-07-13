import React from 'react';
import { makeStyles } from '@material-ui/core';
import ReonomyTheme from './theme';
import Labels from './globals/labels';
import Utils from './globals/utils';
import Typography from './globals/typography';
import Leaders from './globals/leaders';
import MTAs from './globals/mta-icons';

interface StyleProps {
  children?: React.ReactElement;
  fontDirectory?: string;
}

const withReonomyStyles = (fontDirectory = '') =>
  makeStyles({
    '@global': {
      ...Leaders(ReonomyTheme),
      ...Typography(fontDirectory),
      ...Labels,
      ...Utils,
      ...MTAs
    }
  });

function ReonomyCssBaseline({ children, fontDirectory }: StyleProps) {
  withReonomyStyles(fontDirectory)();
  return <React.Fragment>{children}</React.Fragment>;
}

export default ReonomyCssBaseline;
