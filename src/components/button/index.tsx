import MuiButton, { ButtonProps as MuiButtonProps } from '@material-ui/core/Button';
import * as React from 'react';
import ReonomyTheme from '../../theme';
import { getMarginArray } from '../../utils/margin';
import useStyles, { StyleClasses } from './style';

// Requires special typing in order to accept a `component` prop
// See https://material-ui.com/guides/typescript/#usage-of-component-prop
export type ButtonProps<C extends React.ElementType> = Omit<MuiButtonProps<C, { component?: C }>, 'color' | 'size'> & {
  color?: MuiButtonProps['color'] | 'tertiary' | 'success';
  size?: MuiButtonProps['size'] | 'huge';
  margin?: number | number[];
};

export const Button = React.forwardRef(
  <C extends React.ElementType>(
    { children, className, color, size = 'medium', variant, margin, ...muiProps }: ButtonProps<C>,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    const classes: StyleClasses = useStyles();
    const classNames: string[] = [classes.root];

    let muiColor: MuiButtonProps['color'];
    const muiSize: MuiButtonProps['size'] = size !== 'huge' ? size : undefined;

    if (variant === 'outlined') classNames.push(classes.outlined);

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

    if (className) classNames.push(className);

    const style = { ...muiProps.style };
    if (margin) style.margin = ReonomyTheme.spacing(...getMarginArray(margin));

    return (
      <MuiButton
        className={classNames.join(' ')}
        color={muiColor}
        size={muiSize}
        variant={variant}
        style={style}
        ref={ref}
        {...muiProps}
      >
        {children}
      </MuiButton>
    );
  }
);
