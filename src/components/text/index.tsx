import React from 'react';
import { Typography, TypographyProps } from '@material-ui/core';
import useStyles, { StyleClasses } from './style';

type MuiVariant = Exclude<TypographyProps['variant'], 'button'>;

export interface TextProps extends Omit<TypographyProps, 'variant' | 'color'> {
  gutterBottom?: boolean;
  gutterTop?: boolean;
  gutterLeft?: boolean;
  gutterRight?: boolean;
  gutters?: boolean;
  padded?: boolean;
  fontWeight?: 'regular' | 'medium' | 'semibold'; // 400, 500, 600
  variant?: MuiVariant | 'huge' | 'code';
  color?: TypographyProps['color'] | 'textDisabled' | 'textHint' | 'white';
  component?: React.ElementType;
}

export function Text({
  children,
  gutterBottom,
  gutterTop,
  gutterLeft,
  gutterRight,
  gutters,
  padded,
  variant,
  fontWeight,
  color,
  component: elementType,
  className,
  ...muiProps
}: TextProps) {
  const classes: StyleClasses = useStyles();
  const classNames: string[] = [];
  let muiVariant: MuiVariant;
  let muiColor: TypographyProps['color'];
  let component = elementType;

  Object.entries({ gutterBottom, gutterTop, gutterLeft, gutterRight, gutters, padded }).forEach(([name, value]) => {
    if (value) classNames.push(classes[name as keyof StyleClasses]);
  });

  switch (variant) {
    case 'huge':
      classNames.push(classes.huge);
      muiVariant = 'h1';
      break;
    case 'code':
      classNames.push(classes.code);
      component = component || 'code';
      muiVariant = 'body2';
      break;
    default:
      muiVariant = variant;
  }

  switch (fontWeight) {
    case 'medium':
      classNames.push(classes.fontWeightMedium);
      break;
    case 'regular':
      classNames.push(classes.fontWeightRegular);
      break;
    case 'semibold':
      classNames.push(classes.fontWeightSemiBold);
      break;
    default:
      break;
  }

  switch (color) {
    case 'textDisabled':
      classNames.push(classes.textDisabled);
      break;
    case 'textHint':
      classNames.push(classes.textHint);
      break;
    case 'white':
      classNames.push(classes.textWhite);
      break;
    default:
      muiColor = color;
  }

  if (className) classNames.push(className);

  return (
    <Typography variant={muiVariant} color={muiColor} className={classNames.join(' ')} {...{ component }} {...muiProps}>
      {children}
    </Typography>
  );
}
