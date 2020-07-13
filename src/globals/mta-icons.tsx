// reference: https://www1.nyc.gov/assets/doitt/html/nyc-core-framework/subway-icons.html

export const mtaPallete = {
  Red: '#ee352e',
  Green: '#03933c',
  LightGreen: '#6cbe45',
  Blue: '#0039a6',
  Orange: '#ff6319',
  Purple: '#b933ad',
  Yellow: '#fccc06',
  Gray: '#a8a9ac',
  Brown: '#996632'
};

const ICON_PADDING_EM = 0.4;

const MTAs = {
  '[class*="subway-icon"]': {
    position: 'relative',
    fontSize: '0.75em',
    zIndex: 5,
    height: '1em',
    width: '1em',
    marginLeft: `${ICON_PADDING_EM / 2}em`,
    marginRight: `${ICON_PADDING_EM / 2}em`,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'inline-flex',
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#000',

    '&:before': {
      content: `''`,
      position: 'absolute',
      zIndex: -1,
      width: `calc(100% + ${ICON_PADDING_EM}em)`,
      height: `calc(100% + ${ICON_PADDING_EM}em)`,
      left: `-${ICON_PADDING_EM / 2}em`,
      top: `-${ICON_PADDING_EM / 2}em`,
      borderRadius: '50%',
      backgroundColor: 'red'
    },

    '&.express': {
      marginLeft: `${ICON_PADDING_EM / 1.5}em`,
      marginRight: `${ICON_PADDING_EM / 1.5}em`,

      '&:before': {
        transform: 'rotate(45deg)',
        borderRadius: 0,
        width: `calc(100% + ${ICON_PADDING_EM / 4}em)`,
        height: `calc(100% + ${ICON_PADDING_EM / 4}em)`,
        left: `-${ICON_PADDING_EM / 8}em`,
        top: `-${ICON_PADDING_EM / 8}em`
      }
    }
  },

  '.mta-red': {
    color: '#FFF',
    '&:before': {
      backgroundColor: mtaPallete.Red
    }
  },
  '.mta-green': {
    color: '#FFF',
    '&:before': {
      backgroundColor: mtaPallete.Green
    }
  },
  '.mta-blue': {
    color: '#FFF',
    '&:before': {
      backgroundColor: mtaPallete.Blue
    }
  },
  '.mta-orange': {
    color: '#FFF',
    '&:before': {
      backgroundColor: mtaPallete.Orange
    }
  },
  '.mta-purple': {
    color: '#FFF',
    '&:before': {
      backgroundColor: mtaPallete.Purple
    }
  },
  '.mta-green-2': {
    color: '#FFF',
    '&:before': {
      backgroundColor: mtaPallete.LightGreen
    }
  },
  '.mta-yellow': {
    color: '#000',
    '&:before': {
      backgroundColor: mtaPallete.Yellow
    }
  },
  '.mta-gray': {
    color: '#FFF',
    '&:before': {
      backgroundColor: mtaPallete.Gray
    }
  },
  '.mta-brown': {
    color: '#FFF',
    '&:before': {
      backgroundColor: mtaPallete.Brown
    }
  }
};

export default MTAs;
