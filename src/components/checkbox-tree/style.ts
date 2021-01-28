import { makeStyles, Theme } from '@material-ui/core';

export interface StyleClasses {
  container: string;
  parent: string;
  child: string;
  collapseIcon: string;
  label: string;
}

export interface StyleProps {
  level: number;
  checked: boolean;
}

export default makeStyles((theme: Theme) => {
  const multiplier = theme.spacing(1 / 2);
  const iconWidth = 24; // adds extra margin accounting the icon

  return {
    label: {
      color: (props: StyleProps) => (!props.checked ? theme.palette.grey[500] : 'inherit')
    },
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
