import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export default function IconTodayOutline(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 1.5C6.41421 1.5 6.75 1.83579 6.75 2.25V3H17.25V2.25C17.25 1.83579 17.5858 1.5 18 1.5C18.4142 1.5 18.75 1.83579 18.75 2.25V3H19.5C21.1569 3 22.5 4.34315 22.5 6V19.5C22.5 21.1569 21.1569 22.5 19.5 22.5H4.5C2.84315 22.5 1.5 21.1569 1.5 19.5V6C1.5 4.34315 2.84315 3 4.5 3H5.25V2.25C5.25 1.83579 5.58579 1.5 6 1.5ZM21 9.75102C20.9985 9.35339 20.8399 8.97244 20.5587 8.69125C20.2775 8.41002 19.8965 8.25141 19.4988 8.25H4.5012C4.10351 8.25141 3.72249 8.41002 3.44125 8.69125C3.16002 8.97248 3.00141 9.35351 3 9.7512V19.5C3 20.3284 3.67157 21 4.5 21H19.5C20.3284 21 21 20.3284 21 19.5V9.75102Z"
        fill="black"
        fillOpacity="0.54"
      />
      <path
        d="M9.16078 9.75H5.83922C5.09959 9.75 4.5 10.3496 4.5 11.0892V14.4108C4.5 15.1504 5.09959 15.75 5.83922 15.75H9.16078C9.90041 15.75 10.5 15.1504 10.5 14.4108V11.0892C10.5 10.3496 9.90041 9.75 9.16078 9.75Z"
        fill="black"
        fillOpacity="0.54"
      />
    </SvgIcon>
  );
}