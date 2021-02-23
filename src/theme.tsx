import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

// material-ui default theme reference:
// https://material-ui.com/customization/default-theme/?expend-path=$.typography

const hasTouch = typeof document !== 'undefined' && 'ontouchstart' in document.documentElement;

export interface Labels {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
}

// override mui's palette typings to include custom colors
declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    tertiary: SimplePaletteColorOptions;
    accent: SimplePaletteColorOptions;
    labels: Labels;
  }
  interface PaletteOptions {
    tertiary?: SimplePaletteColorOptions;
    accent?: SimplePaletteColorOptions;
    labels?: Labels;
  }
}

const ReonomyTheme = createMuiTheme({
  typography: {
    fontFamily: "'Basier Square Regular', Helvetica, Arial, sans-serif",
    h1: {
      fontSize: '6rem',
      fontWeight: 'normal',
      lineHeight: 1.167,
      letterSpacing: -2.5
    },
    h2: {
      fontSize: '4.5rem',
      fontWeight: 'normal',
      lineHeight: 1.225,
      letterSpacing: -1.5
    },
    h3: {
      fontSize: '3.75rem',
      fontWeight: 'normal',
      lineHeight: 1.2,
      letterSpacing: -0.75
    },
    h4: {
      fontSize: '3rem',
      fontWeight: 'normal',
      lineHeight: 1.333,
      letterSpacing: -0.5
    },
    h5: {
      fontSize: '2.5rem',
      fontWeight: 'normal',
      lineHeight: 1.4,
      letterSpacing: -0.25
    },
    h6: {
      fontSize: '2rem',
      fontWeight: 'normal',
      lineHeight: 1.5,
      letterSpacing: -0.15
    },
    subtitle1: {
      fontSize: '1.5rem',
      fontWeight: 'normal',
      lineHeight: 1.333
    },
    subtitle2: {
      fontSize: '1.25rem',
      fontWeight: 'normal',
      lineHeight: 1.6,
      letterSpacing: 0.15
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 'normal',
      lineHeight: 1.5,
      letterSpacing: 0.25
    },
    body2: {
      fontSize: '.875rem',
      fontWeight: 'normal',
      lineHeight: 1.5,
      letterSpacing: 0.5
    },
    button: {
      fontFamily: "'Basier Square SemiBold', Helvetica, Arial, sans-serif",
      fontWeight: 'normal',
      letterSpacing: 0.5,
      textTransform: 'none'
    },
    overline: {
      fontSize: '.75rem',
      fontFamily: "'Basier Square Medium', Helvetica, Arial, sans-serif",
      fontWeight: 'normal',
      lineHeight: 1.333,
      letterSpacing: 2
    }
  },
  palette: {
    primary: {
      main: '#1C1D20', // grey[900]
      dark: '#000000',
      contrastText: '#fff'
    },
    secondary: {
      light: '#E8EAF6',
      main: '#2E3191',
      dark: '#0F1144',
      contrastText: '#fff'
    },
    tertiary: {
      light: '#E0F5F7',
      main: '#41BBC7',
      dark: '#2E8C94',
      contrastText: '#fff'
    },
    success: {
      light: '#97E1AF',
      main: '#37CC75',
      dark: '#27914B',
      contrastText: '#1C1D20' // grey[900]
    },
    warning: {
      main: '#FFC700'
    },
    error: {
      main: '#FF0000'
    },
    accent: {
      main: '#F1F3F7' // grey[100]
    },
    text: {
      primary: '#1C1D20', // grey[900]
      secondary: '#5B5D60', // grey[700]
      disabled: '#97999D', // grey[500]
      hint: '#97999D' // grey[500]
    },
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
    labels: {
      '0': '#959595', // grey
      '1': '#f2d600', // yellow
      '2': '#e79f27', // orange
      '3': '#d36027', // red
      '4': '#00a074', // green
      '5': '#cc7aa8', // pink
      '6': '#5fb2e6', // light blue
      '7': '#0773b3', // dark blue
      '8': '#3a3b4d' // black
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
        color: '#3C3E41' // grey[800]
      }
    },
    MuiTableCell: {
      root: {
        fontSize: '.875rem',
        padding: '8px'
      },
      head: {
        fontSize: '.875rem',
        fontFamily: "'Basier Square Medium', Helvetica, Arial, sans-serif",
        fontWeight: 'normal'
      },
      stickyHeader: {
        backgroundColor: 'white'
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
