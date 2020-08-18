import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export default function IconWarningSolid(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4.78125 12H19.2188M4.78125 8.25H19.2188M4.78125 15.75H19.2188"
        stroke="black"
        strokeOpacity="0.54"
        strokeWidth="2.0625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
}
