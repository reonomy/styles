import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export function IconMenuOutline(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        d="M3.75 7.5H20.25M3.75 12H20.25M3.75 16.5H20.25"
        fill="transparent"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </SvgIcon>
  );
}
