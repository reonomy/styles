import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export default function IconCloudUploadOutline(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M15 17.2383H18.5625C21.1406 17.2383 23.25 15.8691 23.25 13.3195C23.25 10.77 20.7656 9.50062 18.75 9.40078C18.3333 5.41359 15.4219 2.98828 12 2.98828C8.76562 2.98828 6.6825 5.13469 6 7.26328C3.1875 7.53047 0.75 9.32016 0.75 12.2508C0.75 15.1814 3.28125 17.2383 6.375 17.2383H9M15 11.9883L12 8.98828L9 11.9883M12 21.008V9.73828"
        stroke="black"
        strokeOpacity="0.54"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
}
