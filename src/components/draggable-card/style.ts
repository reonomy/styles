import { makeStyles, Theme } from '@material-ui/core';

export interface StyleClasses {
  container: string;
  card: string;
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
    }
  };
});
