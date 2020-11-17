import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export function IconStarHalfOutline(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        d="M22.5 9.75H14.4375L12 2.25L9.5625 9.75H1.5L8.0625 14.25L5.53125 21.75L12 17.0625L18.4688 21.75L15.9375 14.25L22.5 9.75Z"
        fill="none"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M12 2.25V17.0625L5.53125 21.75L8.0625 14.25L1.5 9.75H9.5625L12 2.25Z" />
    </SvgIcon>
  );
}
