import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export default function IconDownloadOutline(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M15.75 8.25H17.625C18.1223 8.25 18.5992 8.44754 18.9508 8.79917C19.3025 9.15081 19.5 9.62772 19.5 10.125V19.875C19.5 20.3723 19.3025 20.8492 18.9508 21.2008C18.5992 21.5525 18.1223 21.75 17.625 21.75H6.375C5.87772 21.75 5.40081 21.5525 5.04917 21.2008C4.69754 20.8492 4.5 20.3723 4.5 19.875V10.125C4.5 9.62772 4.69754 9.15081 5.04917 8.79917C5.40081 8.44754 5.87772 8.25 6.375 8.25H8.25M8.25 12.75L12 16.5L15.75 12.75M12 2.25V15.75"
        fill="transparent"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
}
