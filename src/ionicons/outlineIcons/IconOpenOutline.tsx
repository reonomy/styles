import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export function IconOpenOutline(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        d="M18 10.5V19.125C18 19.3712 17.9515 19.615 17.8573 19.8425C17.763 20.07 17.6249 20.2767 17.4508 20.4508C17.2767 20.6249 17.07 20.763 16.8425 20.8573C16.615 20.9515 16.3712 21 16.125 21H4.875C4.37772 21 3.90081 20.8025 3.54917 20.4508C3.19754 20.0992 3 19.6223 3 19.125V7.875C3 7.37772 3.19754 6.90081 3.54917 6.54917C3.90081 6.19754 4.37772 6 4.875 6H12.7256M15.75 3H21V8.25M10.5 13.5L20.625 3.375"
        fill="transparent"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
}
