import React from 'react';
import { Checkbox as MUICheckbox, CheckboxProps } from '@material-ui/core';
import useStyles, { StyleClasses } from './style';

export function Checkbox(args: CheckboxProps) {
  const classes: StyleClasses = useStyles();
  return <MUICheckbox color="default" {...args} className={[classes.checkbox, args.className].join(' ')} />;
}
