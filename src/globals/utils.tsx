const Utils = {
  '.block': {
    display: 'block !important'
  },
  '.relative': {
    position: 'relative'
  },
  '.align-center': {
    textAlign: 'center'
  },
  '.align-right': {
    textAlign: 'right'
  },
  '.lowercase': {
    textTransform: 'lowercase'
  },
  '.uppercase': {
    textTransform: 'uppercase'
  },
  '.capitalize': {
    textTransform: 'capitalize'
  },
  '.sentence-case:first-letter': {
    textTransform: 'capitalize'
  },
  '@-webkit-keyframes icon-spin': {
    '0%': {
      '-webkit-transform': 'rotate(0deg)'
    },
    '100%': {
      '-webkit-transform': 'rotate(359deg)'
    }
  },
  '@keyframes icon-spin': {
    '0%': {
      transform: 'rotate(0deg)'
    },
    '100%': {
      transform: 'rotate(359deg)'
    }
  },
  '.icon-spin': {
    display: 'inline-block',
    '-webkit-animation': 'icon-spin 1.5s infinite linear',
    'animation': 'icon-spin 1.5s infinite linear'
  }
};

export default Utils;
