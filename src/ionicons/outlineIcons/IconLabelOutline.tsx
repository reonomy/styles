import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export function IconLabelOutline(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M16.8347 5.96121C16.7081 5.81613 16.5519 5.69982 16.3766 5.6201C16.2013 5.54038 16.011 5.4991 15.8184 5.49902L4.275 5.49902C3.91658 5.50063 3.5733 5.64372 3.31986 5.89716C3.06641 6.1506 2.92332 6.49389 2.92172 6.8523V17.6457C2.92332 18.0042 3.06641 18.3474 3.31986 18.6009C3.5733 18.8543 3.91658 18.9974 4.275 18.999L15.8184 18.999C16.0108 18.9988 16.201 18.9576 16.3761 18.8781C16.5513 18.7985 16.7075 18.6825 16.8342 18.5378L21 12.249L16.8347 5.96262V5.96121Z"
        fill="transparent"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
}
