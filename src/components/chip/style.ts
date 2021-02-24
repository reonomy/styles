import { createStyles, makeStyles, Theme } from '@material-ui/core';

export interface StyleClasses {
  chip: string;
}

export default makeStyles((theme: Theme) => {
  return createStyles({
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
  });
});
