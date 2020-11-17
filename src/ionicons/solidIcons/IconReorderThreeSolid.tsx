import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export function IconReorderThreeSolid(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        d="M4.78125 12H19.2188M4.78125 8.25H19.2188M4.78125 15.75H19.2188"
        fill="transparent"
        strokeWidth="2.0625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
}
