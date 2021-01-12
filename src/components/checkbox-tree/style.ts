import { createStyles, makeStyles, Theme } from '@material-ui/core';

export interface StyleClasses {
  container: string;
  parent: string;
  child: string;
}

export interface StyleProps {
  level: number;
}

export default makeStyles((theme: Theme) => {
  const multiplier = 4;

  return createStyles({
    container: {
      display: 'flex'
    },
    parent: {
      color: theme.palette.grey[900],
      '&$checked': {
        color: theme.palette.grey[900]
      },
      checked: {}
    },
    child: {
      color: theme.palette.grey[900],
      '&$checked': {
        color: theme.palette.grey[900]
      },
      checked: {},
      marginLeft: (props: StyleProps) => theme.spacing(props.level * multiplier)
    }
  });
});
