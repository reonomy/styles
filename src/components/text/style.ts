import { makeStyles, Theme } from '@material-ui/core';

export interface StyleClasses {
  gutterBottom: string;
  gutterTop: string;
  gutterLeft: string;
  gutterRight: string;
  gutters: string;
  padded: string;
  huge: string;
  code: string;
  fontWeightMedium: string;
  fontWeightRegular: string;
  fontWeightSemiBold: string;
  textDisabled: string;
  textHint: string;
}

export default makeStyles((theme: Theme) => {
  return {
    gutterBottom: {
      marginBottom: theme.spacing(2)
    },
    gutterTop: {
      marginTop: theme.spacing(2)
    },
    gutterLeft: {
      marginLeft: theme.spacing(2)
    },
    gutterRight: {
      marginRight: theme.spacing(2)
    },
    gutters: {
      margin: theme.spacing(2)
    },
    padded: {
      padding: theme.spacing(2)
    },
    huge: {
      fontSize: '9rem',
      fontFamily: "'Basier Square Regular', Helvetica, Arial, sans-serif"
    },
    code: {
      fontFamily: 'monospace, monaco, courier'
    },
    fontWeightMedium: {
      fontFamily: "'Basier Square Medium', Helvetica, Arial, sans-serif"
    },
    fontWeightRegular: {
      fontFamily: "'Basier Square Regular', Helvetica, Arial, sans-serif"
    },
    fontWeightSemiBold: {
      fontFamily: "'Basier Square SemiBold', Helvetica, Arial, sans-serif"
    },
    textDisabled: {
      color: theme.palette.text.disabled
    },
    textHint: {
      color: theme.palette.text.hint
    }
  };
});
