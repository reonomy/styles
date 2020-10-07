import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export default function IconRemoveSolid(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M18.75 12H5.25" fill="transparent" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </SvgIcon>
  );
}
