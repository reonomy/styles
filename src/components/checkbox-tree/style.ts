import { makeStyles, Theme } from '@material-ui/core';

export interface StyleClasses {
  container: string;
  parent: string;
  child: string;
  collapseIcon: string;
}

export interface StyleProps {
  level: number;
}

export default makeStyles((theme: Theme) => {
  const multiplier = theme.spacing(1 / 2);
  const iconWidth = 24; // adds extra margin accounting the icon

  return {
    container: {
      display: 'flex'
    },
    parent: {},
    child: {
      marginLeft: (props: StyleProps) => theme.spacing(props.level * multiplier) + iconWidth
    },
    collapseIcon: {
      color: theme.palette.grey[700]
    }
  };
});
