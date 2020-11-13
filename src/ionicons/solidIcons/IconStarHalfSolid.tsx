import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export function IconStarHalfSolid(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M22.5 8.75H14.4375L12 1.25L9.5625 8.75H1.5L8.0625 13.25L5.53125 20.75L12 16.0625L18.4688 20.75L15.9375 13.25L22.5 8.75Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M12 1.25V16.0625L5.53125 20.75L8.0625 13.25L1.5 8.75H9.5625L12 1.25Z" fill="currentColor" />
    </SvgIcon>
  );
}
