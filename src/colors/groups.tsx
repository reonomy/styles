import React from 'react';
import { Color, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import { Labels } from '../theme';

const useStyles = makeStyles((theme: Theme) => {
  return {
    block: {
      height: theme.spacing(6)
    },
    code: {
      fontFamily: 'monospace',
      width: theme.spacing(6)
    }
  };
});

function Item({ name, color }: { name: string; color: string | undefined }) {
  const classes = useStyles();
  return (
    <Grid container alignItems="center">
      <Grid item sm={1} className={classes.block} style={{ backgroundColor: color }} />
      <Grid item sm={1}>
        <Typography align="center" className={classes.code} color="textSecondary">
          {name}
        </Typography>
      </Grid>
      <Grid item sm={1}>
        <Typography className={classes.code} color="textSecondary">
          {color}
        </Typography>
      </Grid>
    </Grid>
  );
}

export function GreyGroup({ color }: { color: Partial<Color> }) {
  return (
    <>
      {Object.keys(color).map(key => (
        <Item name={key} color={color[key as keyof Color]} />
      ))}
    </>
  );
}

export function LabelsGroup({ color }: { color: Labels }) {
  return (
    <>
      {Object.keys(color).map(key => (
        <Item name={key} color={color[(key as unknown) as keyof Labels]} />
      ))}
    </>
  );
}
