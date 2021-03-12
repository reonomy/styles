import MuiButton, { ButtonProps as MuiButtonProps } from '@material-ui/core/Button';
import React from 'react';
import ReonomyTheme from '../../theme';
import { getMarginArray } from '../../utils/margin';
import useStyles, { StyleClasses } from './style';

export interface ButtonProps extends Omit<MuiButtonProps, 'color' | 'size'> {
  color?: MuiButtonProps['color'] | 'tertiary' | 'success';
  size?: MuiButtonProps['size'] | 'huge';
  // Accepts theme.spacing() args as an array or single number
  margin?: number | number[];
}

export const Button = ({ children, className, color, size = 'medium', variant, margin, ...muiProps }: ButtonProps) => {
  const classes: StyleClasses = useStyles();
  const classNames: string[] = [classes.root];

  if (className) classNames.push(className);

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
    <MuiButton
      className={classNames.join(' ')}
      color={muiColor}
      size={muiSize}
      variant={variant}
      style={{
        // type must be [number, number, number, number] when using spread operator
        margin: margin && ReonomyTheme.spacing(...getMarginArray(margin))
      }}
      {...muiProps}
    >
      {children}
    </MuiButton>
  );
};
