import { createStyles, makeStyles, Theme } from '@material-ui/core';

export interface StyleClasses {
  checkbox: string;
}

export default makeStyles((theme: Theme) => {
  return createStyles({
    checkbox: {
      color: theme.palette.grey[900],
      '&$checked': {
        color: theme.palette.grey[900]
      },
      checked: {}
    }
  });
});
