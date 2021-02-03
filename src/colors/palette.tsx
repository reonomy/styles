import React from 'react';
import { Grid, makeStyles, SimplePaletteColorOptions, Theme, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => {
  return {
    block: {
      width: theme.spacing(13),
      height: theme.spacing(10)
    },
    mainBlock: {
      height: theme.spacing(10),
      marginBottom: theme.spacing(1)
    },
    subBlock: {
      height: theme.spacing(2),
      width: '50%',
      float: 'left'
    },
    code: {
      fontFamily: 'monospace'
    },
    contrast: {
      fontFamily: 'monospace',
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1)
    }
  };
});

export function Palette({ color }: { color: SimplePaletteColorOptions }) {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item sm={2}>
        <div className={classes.block}>
          <div className={classes.mainBlock} style={{ backgroundColor: color.main }}>
            {' '}
          </div>
          <div className={classes.subBlock} style={{ backgroundColor: color.dark }}>
            {' '}
          </div>
          <div className={classes.subBlock} style={{ backgroundColor: color.light }}>
            {' '}
          </div>
        </div>
      </Grid>
      <Grid item sm={10}>
        <Typography className={classes.code} color="textSecondary">
          main: {color.main}
        </Typography>
        <Typography className={classes.code} color="textSecondary">
          dark: {color.dark}
        </Typography>
        <Typography className={classes.code} color="textSecondary">
          light: {color.light}
        </Typography>
        <Typography className={classes.code} component="span" color="textSecondary">
          contrastText:{' '}
        </Typography>
        <Typography
          className={classes.contrast}
          component="span"
          style={{
            backgroundColor: color.main,
            color: color.contrastText
          }}
        >
          {color.contrastText}
        </Typography>
      </Grid>
    </Grid>
  );
}
