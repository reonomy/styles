import Color from 'color';
import ReonomyPalette from '../palette';


const Labels = {
  '.label-style-0': {
    backgroundColor: `${ReonomyPalette.labelStyle0} !important`,
    color: 'white !important',
    '&:hover': {
      backgroundColor: `${Color(ReonomyPalette.labelStyle0).darken(0.5).hex()} !important`
    }
  },
  '.label-style-1': {
    backgroundColor: `${ReonomyPalette.labelStyle1} !important`,
    color: 'black !important',
    '&:hover': {
      backgroundColor: `${Color(ReonomyPalette.labelStyle1).darken(0.5).hex()} !important`
    }
  },
  '.label-style-2': {
    backgroundColor: `${ReonomyPalette.labelStyle2} !important`,
    color: 'black !important',
    '&:hover': {
      backgroundColor: `${Color(ReonomyPalette.labelStyle2).darken(0.5).hex()} !important`
    }
  },
  '.label-style-3': {
    backgroundColor: `${ReonomyPalette.labelStyle3} !important`,
    color: 'white !important',
    '&:hover': {
      backgroundColor: `${Color(ReonomyPalette.labelStyle3).darken(0.5).hex()} !important`
    }
  },
  '.label-style-4': {
    backgroundColor: `${ReonomyPalette.labelStyle4} !important`,
    color: 'white !important',
    '&:hover': {
      backgroundColor: `${Color(ReonomyPalette.labelStyle4).darken(0.5).hex()} !important`
    }
  },
  '.label-style-5': {
    backgroundColor: `${ReonomyPalette.labelStyle5} !important`,
    color: 'white !important',
    '&:hover': {
      backgroundColor: `${Color(ReonomyPalette.labelStyle5).darken(0.5).hex()} !important`
    }
  },
  '.label-style-6': {
    backgroundColor: `${ReonomyPalette.labelStyle6} !important`,
    color: 'white !important',
    '&:hover': {
      backgroundColor: `${Color(ReonomyPalette.labelStyle6).darken(0.5).hex()} !important`
    }
  },
  '.label-style-7': {
    backgroundColor: `${ReonomyPalette.labelStyle7} !important`,
    color: 'white !important',
    '&:hover': {
      backgroundColor: `${Color(ReonomyPalette.labelStyle7).darken(0.5).hex()} !important`
    }
  },
  '.label-style-8': {
    backgroundColor: `${ReonomyPalette.labelStyle8} !important`,
    color: 'white !important',
    '&:hover': {
      backgroundColor: `${Color(ReonomyPalette.labelStyle8).darken(0.5).hex()} !important`
    }
  }
}

export default Labels;
