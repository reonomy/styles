import { Theme } from "@material-ui/core";

const Leaders = (theme: Theme) => ({

  'dl.leader-lines': {
    overflow: 'hidden',
    marginBottom: 0,
    marginTop: 0,
    paddingTop: '1rem',
    paddingLeft: 0,
    paddingRight: 0,
    fontSize: theme.typography.body2.fontSize,

    '@global dt': {
      paddingRight: theme.spacing(1),
      position: 'relative',
      float: 'left',
      clear: 'both',
      color: theme.palette.grey[500],

      '&::before': {
        content: `''`,
        position: 'absolute',
        display: 'flex',
        bottom: theme.spacing(1),
        left: '100%',
        width: 1000,
        height: '100%',
        borderBottom: `1px dotted ${theme.palette.grey[500]}`,
      }
    },

    '@global dd': {
      backgroundColor: 'white',
      position: 'relative',
      float: 'right',
      zIndex: 1,
      paddingLeft: theme.spacing(1),
      marginLeft: 0,
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden'
    }
  }
});

export default Leaders;
