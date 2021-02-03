import { Theme } from '@material-ui/core';
import Color from 'color';

const Labels = (theme: Theme) => ({
  '.label-style-0': {
    backgroundColor: `${theme.palette.labels[0]} !important`,
    color: 'white !important',
    '&:hover': {
      backgroundColor: `${Color(theme.palette.labels[0])
        .darken(0.05)
        .hex()} !important`
    }
  },
  '.label-style-1': {
    backgroundColor: `${theme.palette.labels[1]} !important`,
    color: 'black !important',
    '&:hover': {
      backgroundColor: `${Color(theme.palette.labels[1])
        .darken(0.05)
        .hex()} !important`
    }
  },
  '.label-style-2': {
    backgroundColor: `${theme.palette.labels[2]} !important`,
    color: 'black !important',
    '&:hover': {
      backgroundColor: `${Color(theme.palette.labels[2])
        .darken(0.05)
        .hex()} !important`
    }
  },
  '.label-style-3': {
    backgroundColor: `${theme.palette.labels[3]} !important`,
    color: 'white !important',
    '&:hover': {
      backgroundColor: `${Color(theme.palette.labels[3])
        .darken(0.05)
        .hex()} !important`
    }
  },
  '.label-style-4': {
    backgroundColor: `${theme.palette.labels[4]} !important`,
    color: 'white !important',
    '&:hover': {
      backgroundColor: `${Color(theme.palette.labels[4])
        .darken(0.05)
        .hex()} !important`
    }
  },
  '.label-style-5': {
    backgroundColor: `${theme.palette.labels[5]} !important`,
    color: 'white !important',
    '&:hover': {
      backgroundColor: `${Color(theme.palette.labels[5])
        .darken(0.05)
        .hex()} !important`
    }
  },
  '.label-style-6': {
    backgroundColor: `${theme.palette.labels[6]} !important`,
    color: 'white !important',
    '&:hover': {
      backgroundColor: `${Color(theme.palette.labels[6])
        .darken(0.05)
        .hex()} !important`
    }
  },
  '.label-style-7': {
    backgroundColor: `${theme.palette.labels[7]} !important`,
    color: 'white !important',
    '&:hover': {
      backgroundColor: `${Color(theme.palette.labels[7])
        .darken(0.05)
        .hex()} !important`
    }
  },
  '.label-style-8': {
    backgroundColor: `${theme.palette.labels[8]} !important`,
    color: 'white !important',
    '&:hover': {
      backgroundColor: `${Color(theme.palette.labels[8])
        .darken(0.05)
        .hex()} !important`
    }
  }
});

export default Labels;
