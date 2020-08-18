import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export default function IconMenuSolid(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4.125 7.125H19.875M4.125 12H19.875M4.125 16.875H19.875"
        stroke="black"
        strokeOpacity="0.54"
        strokeWidth="2.25"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </SvgIcon>
  );
}
