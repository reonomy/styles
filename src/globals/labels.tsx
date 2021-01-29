import Color from 'color';
import { ReonomyTheme } from '..';

const Labels = {
  '.label-style-0': {
    backgroundColor: `${ReonomyTheme.palette.labels[0]} !important`,
    color: 'white !important',
    '&:hover': {
      backgroundColor: `${Color(ReonomyTheme.palette.labels[0])
        .darken(0.05)
        .hex()} !important`
    }
  },
  '.label-style-1': {
    backgroundColor: `${ReonomyTheme.palette.labels[1]} !important`,
    color: 'black !important',
    '&:hover': {
      backgroundColor: `${Color(ReonomyTheme.palette.labels[1])
        .darken(0.05)
        .hex()} !important`
    }
  },
  '.label-style-2': {
    backgroundColor: `${ReonomyTheme.palette.labels[2]} !important`,
    color: 'black !important',
    '&:hover': {
      backgroundColor: `${Color(ReonomyTheme.palette.labels[2])
        .darken(0.05)
        .hex()} !important`
    }
  },
  '.label-style-3': {
    backgroundColor: `${ReonomyTheme.palette.labels[3]} !important`,
    color: 'white !important',
    '&:hover': {
      backgroundColor: `${Color(ReonomyTheme.palette.labels[3])
        .darken(0.05)
        .hex()} !important`
    }
  },
  '.label-style-4': {
    backgroundColor: `${ReonomyTheme.palette.labels[4]} !important`,
    color: 'white !important',
    '&:hover': {
      backgroundColor: `${Color(ReonomyTheme.palette.labels[4])
        .darken(0.05)
        .hex()} !important`
    }
  },
  '.label-style-5': {
    backgroundColor: `${ReonomyTheme.palette.labels[5]} !important`,
    color: 'white !important',
    '&:hover': {
      backgroundColor: `${Color(ReonomyTheme.palette.labels[5])
        .darken(0.05)
        .hex()} !important`
    }
  },
  '.label-style-6': {
    backgroundColor: `${ReonomyTheme.palette.labels[6]} !important`,
    color: 'white !important',
    '&:hover': {
      backgroundColor: `${Color(ReonomyTheme.palette.labels[6])
        .darken(0.05)
        .hex()} !important`
    }
  },
  '.label-style-7': {
    backgroundColor: `${ReonomyTheme.palette.labels[7]} !important`,
    color: 'white !important',
    '&:hover': {
      backgroundColor: `${Color(ReonomyTheme.palette.labels[7])
        .darken(0.05)
        .hex()} !important`
    }
  },
  '.label-style-8': {
    backgroundColor: `${ReonomyTheme.palette.labels[8]} !important`,
    color: 'white !important',
    '&:hover': {
      backgroundColor: `${Color(ReonomyTheme.palette.labels[8])
        .darken(0.05)
        .hex()} !important`
    }
  }
};

export default Labels;
