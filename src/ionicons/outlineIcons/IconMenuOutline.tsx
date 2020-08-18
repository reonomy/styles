import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export default function IconMenuOutline(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M3.75 7.5H20.25M3.75 12H20.25M3.75 16.5H20.25"
        stroke="black"
        strokeOpacity="0.54"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </SvgIcon>
  );
}
