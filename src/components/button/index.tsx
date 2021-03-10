import MuiButton, { ButtonProps as MuiButtonProps } from '@material-ui/core/Button';
import React from 'react';
import useStyles, { StyleClasses } from './style';

interface ButtonProps extends Omit<MuiButtonProps, 'color' | 'size'> {
  color?: MuiButtonProps['color'] | 'tertiary' | 'success';
  size?: MuiButtonProps['size'] | 'huge';
}

export const Button = ({ children, color, size = 'medium', variant, ...muiProps }: ButtonProps) => {
  const classes: StyleClasses = useStyles();
  const classNames: string[] = [classes.root];

  let muiColor: MuiButtonProps['color'];
  const muiSize: MuiButtonProps['size'] = size !== 'huge' ? size : undefined;

  switch (color) {
    case 'tertiary':
      if (variant === 'contained') {
        classNames.push(classes.containedTertiary);
      } else if (variant === 'outlined') {
        classNames.push(classes.outlinedTertiary);
      } else {
        classNames.push(classes.textTertiary);
      }
      break;
    case 'success':
      if (variant === 'contained') {
        classNames.push(classes.containedSuccess);
      } else if (variant === 'outlined') {
        classNames.push(classes.outlinedSuccess);
      } else {
        classNames.push(classes.textSuccess);
      }
      break;
    default:
      muiColor = color;
  }

  switch (size) {
    case 'small':
      classNames.push(classes.sizeSmall);
      break;
    case 'medium':
      classNames.push(classes.sizeMedium);
      break;
    case 'large':
      classNames.push(classes.sizeLarge);
      break;
    case 'huge':
      classNames.push(classes.sizeHuge);
      break;
    default:
  }

  return (
    <MuiButton color={muiColor} size={muiSize} className={classNames.join(' ')} variant={variant} {...muiProps}>
      {children}
    </MuiButton>
  );
};
