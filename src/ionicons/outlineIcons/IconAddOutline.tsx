import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export function IconAddOutline(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        d="M12 5.25V18.75M18.75 12H5.25"
        fill="transparent"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
}
