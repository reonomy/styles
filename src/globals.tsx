import { makeStyles } from '@material-ui/core';
import Typography from './globals/typography';

const ReonomyGlobalStyles = makeStyles({
  '@global': {
    ...Typography
  },
});

export default ReonomyGlobalStyles