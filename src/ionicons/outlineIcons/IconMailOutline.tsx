import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export default function IconMailOutline(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M5.25 7.5L12 12.75L18.75 7.5M4.125 4.5H19.875C20.9105 4.5 21.75 5.33947 21.75 6.375V17.625C21.75 18.6605 20.9105 19.5 19.875 19.5H4.125C3.08947 19.5 2.25 18.6605 2.25 17.625V6.375C2.25 5.33947 3.08947 4.5 4.125 4.5Z"
        stroke="black"
        strokeOpacity="0.54"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
}
