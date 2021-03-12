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

export default makeStyles((theme: Theme) => {
  const getTextHoverBackground = (color: 'tertiary' | 'success') =>
    Color(theme.palette[color].main)
      .alpha(theme.palette.action.hoverOpacity)
      .toString();

  const getOutlineBorder = (
    color: 'tertiary' | 'success' // for non-hover
  ) =>
    Color(theme.palette[color].main)
      .alpha(0.5)
      .toString();

  return {
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
      borderColor: getOutlineBorder('success'),
      '&:hover': {
        backgroundColor: getTextHoverBackground('success'),
        borderColor: theme.palette.success.main
      }
    },
    outlinedTertiary: {
      color: theme.palette.tertiary.main,
      borderColor: getOutlineBorder('tertiary'),
      '&:hover': {
        backgroundColor: getTextHoverBackground('tertiary'),
        borderColor: theme.palette.tertiary.main
      }
    },
    textSuccess: {
      color: theme.palette.success.main,
      '&:hover': {
        backgroundColor: getTextHoverBackground('success')
      }
    },
    textTertiary: {
      color: theme.palette.tertiary.main,
      '&:hover': {
        backgroundColor: getTextHoverBackground('tertiary')
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
  };
});
