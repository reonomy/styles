import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import ReonomyPalette from './palette';

// material-ui default theme reference:
// https://material-ui.com/customization/default-theme/?expend-path=$.typography

const hasTouch = typeof document !== 'undefined' && 'ontouchstart' in document.documentElement;

const ReonomyTheme = createMuiTheme({
  typography: {
    fontFamily: "'Basier Square Regular', Helvetica, Arial, sans-serif",
    h6: {
      fontFamily: "'Basier Square Medium', Helvetica, Arial, sans-serif",
      fontWeight: 'normal'
    },
    subtitle1: {
      fontSize: '1.125rem',
      lineHeight: '1.33'
    },
    subtitle2: {
      fontFamily: "'Basier Square Medium', Helvetica, Arial, sans-serif",
      fontSize: '1rem',
      fontWeight: 'normal'
    },
    button: {
      fontFamily: "'Basier Square Medium', Helvetica, Arial, sans-serif",
      fontWeight: 'normal',
      textTransform: 'none'
    },
    overline: {
      fontFamily: "'Basier Square Medium', Helvetica, Arial, sans-serif",
      fontWeight: 'normal'
    }
  },
  palette: {
    primary: {
      light: ReonomyPalette.bayOfManyLight,
      main: ReonomyPalette.bayOfMany,
      dark: ReonomyPalette.bayOfManyDark,
      contrastText: '#fff'
    },
    secondary: {
      light: ReonomyPalette.pelorousLight,
      main: ReonomyPalette.pelorous,
      dark: ReonomyPalette.pelorousDark,
      contrastText: '#fff'
    },
    text: {
      primary: ReonomyPalette.tuatara
    },
    // grey palette generated off tuatara (grey[800]) here https://materialpalettes.com/
    grey: {
      '50': '#F7F9FE',
      '100': '#F1F3F7',
      '200': '#E9EBEF',
      '300': '#DADCE0',
      '400': '#B7B9BC',
      '500': '#97999D',
      '600': '#6F7074',
      '700': '#5B5D60',
      '800': '#3C3E41',
      '900': '#1C1D20'
    },
    background: {
      default: '#F7F9FE' // grey[50]
    }
  },
  shape: {
    borderRadius: 2
  },
  overrides: {
    MuiSnackbarContent: {
      message: {
        fontSize: '1rem'
      }
    },
    MuiButton: {
      containedPrimary: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none'
        }
      },
      containedSecondary: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none'
        }
      },
      contained: {
        '&:active': {
          boxShadow: 'none'
        }
      }
    },
    MuiTooltip: {
      tooltip: {
        fontSize: '.875rem'
      }
    },
    MuiChip: {
      root: {
        fontSize: '.875rem',
        borderRadius: '2px',
        height: '28px',
        backgroundColor: '#E9EBEF' // grey[200]
      },
      deleteIcon: {
        width: `12px`,
        color: ReonomyPalette.mineShaft
      }
    },
    MuiTab: {
      wrapper: {
        fontSize: '.875rem'
      }
    },
    MuiTableCell: {
      root: {
        fontSize: '.875rem',
        padding: '8px'
      },
      head: {
        fontSize: '.875rem'
      },
      stickyHeader: {
        backgroundColor: 'white'
      }
    },
    MuiCardHeader: {
      title: {
        fontSize: '1rem'
      }
    },
    MuiListItemText: {
      primary: {
        fontSize: '.875rem'
      }
    },
    MuiMenuItem: {
      root: {
        fontSize: '.875rem'
      }
    },
    MuiSelect: {
      select: {
        '&:focus': {
          backgroundColor: 'transparent' // remove material-uis pointless faint overlay
        }
      },
      selectMenu: {
        '&$selectMenu': {
          paddingRight: '36px' // increase right padding for ChevronDown icons
        }
      }
    },
    MuiOutlinedInput: {
      input: {
        padding: '14px',
        fontSize: '.875rem'
      },
      root: {
        '&$focused $notchedOutline': {
          borderWidth: 1
        },
        height: '40px'
      },
      multiline: {
        height: 'auto'
      }
    },
    MuiMobileStepper: {
      root: {
        backgroundColor: '#fff',
        width: '100%',
        padding: '16px 24px'
      },
      dot: {
        width: 10,
        height: 10,
        margin: '0 4px'
      }
    },
    MuiInputLabel: {
      outlined: {
        backgroundColor: '#fff'
      },
      shrink: {
        backgroundColor: '#fff'
      }
    }
  },
  props: {
    MuiButton: {
      disableRipple: !hasTouch
    },
    MuiTab: {
      disableRipple: !hasTouch
    }
  }
});

export default ReonomyTheme;
