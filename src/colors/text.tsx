import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => {
  return {
    code: {
      fontFamily: 'monospace'
    }
  };
});

export function Text({ name, color }: { name: string; color: string }) {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item sm={12}>
        <Typography style={{ color }}>{name}</Typography>
      </Grid>
      <Grid item sm={12}>
        <Typography className={classes.code} color="textSecondary">
          {color}
        </Typography>
      </Grid>
    </Grid>
  );
}
