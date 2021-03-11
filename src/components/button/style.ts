import { makeStyles, Theme } from '@material-ui/core';
import Color from 'color';

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
    background: theme.palette.success.main,
    '&:hover': {
      background: theme.palette.success.dark
    }
  },
  containedTertiary: {
    color: '#FFF',
    background: theme.palette.tertiary.main,
    '&:hover': {
      background: theme.palette.tertiary.dark
    }
  },
  outlinedSuccess: {
    color: theme.palette.success.main,
    borderColor: `${Color(theme.palette.success.main).alpha(0.5)}`,
    '&:hover': {
      backgroundColor: `${Color(theme.palette.success.main).alpha(0.04)}`,
      borderColor: theme.palette.success.main
    }
  },
  outlinedTertiary: {
    color: theme.palette.tertiary.main,
    borderColor: `${Color(theme.palette.tertiary.main).alpha(0.5)}`,
    '&:hover': {
      backgroundColor: `${Color(theme.palette.tertiary.main).alpha(0.04)}`,
      borderColor: theme.palette.tertiary.main
    }
  },
  textSuccess: {
    color: theme.palette.success.main,
    '&:hover': {
      backgroundColor: `${Color(theme.palette.success.main).alpha(0.04)}`
    }
  },
  textTertiary: {
    color: theme.palette.tertiary.main,
    '&:hover': {
      backgroundColor: `${Color(theme.palette.tertiary.main).alpha(0.04)}`
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
