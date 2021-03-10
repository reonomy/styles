import { makeStyles, Theme } from '@material-ui/core';
import Color from 'color';
import ReonomyTheme from '../../theme';

export interface StyleClasses {
  root: string;
  containedSuccess: string;
  containedTertiary: string;
  outlinedSuccess: string;
  outlinedTertiary: string;
  textSuccess: string;
  textTertiary: string;
  sizeSmall: string;
  sizeMedium: string;
  sizeLarge: string;
  sizeHuge: string;
}

export default makeStyles((theme: Theme) => ({
  root: {
    lineHeight: 1.6
  },
  containedSuccess: {
    color: theme.palette.grey[900],
    background: ReonomyTheme.palette.success.main,
    '&:hover': {
      background: ReonomyTheme.palette.success.dark
    }
  },
  containedTertiary: {
    color: '#FFF',
    background: ReonomyTheme.palette.tertiary.main,
    '&:hover': {
      background: ReonomyTheme.palette.tertiary.dark
    }
  },
  outlinedSuccess: {
    color: ReonomyTheme.palette.success.main,
    borderColor: `${Color(ReonomyTheme.palette.success.main).alpha(0.5)}`,
    '&:hover': {
      backgroundColor: `${Color(ReonomyTheme.palette.success.main).alpha(0.04)}`,
      borderColor: ReonomyTheme.palette.success.main
    }
  },
  outlinedTertiary: {
    color: ReonomyTheme.palette.tertiary.main,
    borderColor: `${Color(ReonomyTheme.palette.tertiary.main).alpha(0.5)}`,
    '&:hover': {
      backgroundColor: `${Color(ReonomyTheme.palette.tertiary.main).alpha(0.04)}`,
      borderColor: ReonomyTheme.palette.tertiary.main
    }
  },
  textSuccess: {
    color: ReonomyTheme.palette.success.main,
    '&:hover': {
      backgroundColor: `${Color(ReonomyTheme.palette.success.main).alpha(0.04)}`
    }
  },
  textTertiary: {
    color: ReonomyTheme.palette.tertiary.main,
    '&:hover': {
      backgroundColor: `${Color(ReonomyTheme.palette.tertiary.main).alpha(0.04)}`
    }
  },
  sizeSmall: {
    fontSize: '0.875rem',
    padding: theme.spacing(0.5, 1.5)
  },
  sizeMedium: {
    fontSize: '0.875rem',
    padding: theme.spacing(1, 2)
  },
  sizeLarge: {
    fontSize: '1rem',
    padding: theme.spacing(1.5, 3)
  },
  sizeHuge: {
    fontSize: '1.25rem',
    padding: theme.spacing(1.5, 3)
  }
}));
