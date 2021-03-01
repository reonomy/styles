import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon'

export function TestIcon(props: SvgIconProps)  {
  return (
    <SvgIcon viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
      d="M5.25 12.5625L12 19.3125L18.75 12.5625M12 18.375V4.6875"
      fill="transparent"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      />
    </SvgIcon>
  );
}
