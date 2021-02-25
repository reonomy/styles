import { makeStyles, Theme } from '@material-ui/core';

export interface StyleClasses {
  container: string;
  card: string;
  chip: string;
}

export interface StyleProps {
  level: number;
}

export default makeStyles((theme: Theme) => {
  return {
    container: {
      width: '200px'
    },
    card: {
      width: '100%'
    },
    chip: {
      fontSize: theme.typography.body2.fontSize,
      backgroundColor: theme.palette.grey[200],
      marginTop: theme.spacing(1 / 2),
      marginBottom: theme.spacing(1 / 2),
      marginRight: theme.spacing(1),
      [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing(1)
      },
      borderRadius: '2px',
      '& span': {
        width: '100%'
      }
    }
  };
});
