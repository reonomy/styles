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
  const multiplier = theme.spacing(1 / 2);

  return createStyles({
    container: {
      display: 'flex'
    },
    parent: {},
    child: {
      marginLeft: (props: StyleProps) => theme.spacing(props.level * multiplier)
    }
  });
});
